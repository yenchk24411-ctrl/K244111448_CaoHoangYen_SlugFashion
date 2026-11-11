export class Fashion {
    constructor(
        public _id: any = null,
        public IdF: number = 0,               // Cột số tự tăng không trùng
        public style: string = "",
        public fashion_subject: string = "",
        public fashion_detail: string = "",
        public fashion_image: string = "",
        public slug: string = ""              // Trường Slug phục vụ routing
    ) {}

    getBase64String() {
        if (!this.fashion_image) return 'assets/placeholder.png';
        if (!this.fashion_image.startsWith("data:image") && !this.fashion_image.startsWith("http")) {
            return "data:image/png;base64," + this.fashion_image;
        }
        return this.fashion_image;
    }
}