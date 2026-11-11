import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FashionAPIService } from '../fashion-apiservice';
import { Fashion } from '../classes/Fashion';

@Component({
  selector: 'app-fashion-detail',
  standalone: false,
  templateUrl: './fashion-detail-component.html',
  styleUrl: './fashion-detail-component.css'
})
export class FashionDetailComponent implements OnInit {
  fashion = signal<Fashion | null>(null);
  errMessage = signal('');

  constructor(
    private _route: ActivatedRoute,
    private _service: FashionAPIService
  ) {}

  ngOnInit(): void {
    // Tự động tìm theo Slug từ URL nếu được chuyển hướng qua
    this._route.params.subscribe(params => {
      const slug = params['slug'];
      if (slug) {
        this.searchBySlug(slug);
      }
    });
  }

  // Hàm tìm kiếm theo ID thủ công bằng nút bấm
  searchFashion(id: string) {
    if (!id.trim()) return;
    this.fashion.set(null);
    this.errMessage.set('');
    this._service.getFashion(id).subscribe({
      next: (data) => {
        const fashionInstance = Object.assign(new Fashion(), data);
        this.fashion.set(fashionInstance);
      },
      error: (err) => { this.errMessage.set(err); }
    });
  }

  // Hàm tìm kiếm tự động theo Slug
  searchBySlug(slug: string) {
    this.fashion.set(null);
    this.errMessage.set('');
    this._service.getFashionBySlug(slug).subscribe({
      next: (data) => {
        const fashionInstance = Object.assign(new Fashion(), data);
        this.fashion.set(fashionInstance);
      },
      error: (err) => { this.errMessage.set(err); }
    });
  }
}