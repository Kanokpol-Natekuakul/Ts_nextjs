This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
# โปรเจค Attractions (สถานที่ท่องเที่ยว)

โปรเจคนี้เป็นเว็บแอปพลิเคชันที่พัฒนาด้วย [Next.js](https://nextjs.org) และใช้ [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) ในการสร้างโครงสร้างเริ่มต้น

## ภาพรวมของโปรเจค

เว็บแอปพลิเคชันนี้แสดงรายการสถานที่ท่องเที่ยวและรายละเอียดของแต่ละสถานที่ โดยมีฟีเจอร์หลักดังนี้:

- **หน้าแรก**: แสดงรายการสถานที่ท่องเที่ยวทั้งหมดในรูปแบบ Grid Layout
- **หน้ารายละเอียด**: แสดงข้อมูลละเอียดของสถานที่ท่องเที่ยวแต่ละแห่ง

## เทคโนโลยีที่ใช้

- **Framework**: Next.js 15.4.5 (App Router)
- **UI Library**: Material-UI (MUI) v7.2.0
- **Language**: TypeScript
- **Styling**: CSS Modules + Material-UI
- **Data Fetching**: Server-side rendering (SSR) ด้วย fetch API

## ไฟล์สำคัญ

### หน้าหลัก
- `app/page.tsx` - หน้าแรกที่แสดงรายการสถานที่ท่องเที่ยว
- `app/[id]/page.tsx` - หน้ารายละเอียดของสถานที่ท่องเที่ยวแต่ละแห่ง

### การตั้งค่า
- `app/layout.tsx` - Layout หลักของแอปพลิเคชัน
- `app/globals.css` - CSS styles ส่วนกลาง
- `next.config.ts` - การตั้งค่า Next.js
- `tsconfig.json` - การตั้งค่า TypeScript

## การติดตั้งและเริ่มต้นใช้งาน

### ข้อกำหนดเบื้องต้น
- Node.js (เวอร์ชัน 18 หรือสูงกว่า)
- npm, yarn, pnpm หรือ bun

### การติดตั้ง

1. Clone โปรเจค
```bash
git clone [repository-url]
cd nextjs
```

2. ติดตั้ง dependencies
```bash
npm install
# หรือ
yarn install
# หรือ
pnpm install
# หรือ
bun install
```

3. เริ่มต้น development server
```bash
npm run dev
# หรือ
yarn dev
# หรือ
pnpm dev
# หรือ
bun dev
```

4. เปิดเบราว์เซอร์และไปที่ [http://localhost:3000](http://localhost:3000) เพื่อดูผลลัพธ์

## API ที่ใช้

โปรเจคนี้ใช้ API จาก [melivecode.com](https://www.melivecode.com) สำหรับดึงข้อมูลสถานที่ท่องเที่ยว:

- **GET** `/api/attractions` - ดึงรายการสถานที่ท่องเที่ยวทั้งหมด
- **GET** `/api/attractions/{id}` - ดึงรายละเอียดของสถานที่ท่องเที่ยวตาม ID

## โครงสร้างข้อมูล

```typescript
interface Attraction {
  id: number;
  name: string;
  detail: string;
  coverimage: string;
  latitude: number;
  longitude: number;
}
```

## คำสั่งที่ใช้บ่อย

```bash
# เริ่ม development server
npm run dev

# Build สำหรับ production
npm run build

# เริ่ม production server
npm run start

# ตรวจสอบ code ด้วย ESLint
npm run lint
```

## การ Deploy

วิธีที่ง่ายที่สุดในการ deploy แอป Next.js คือใช้ [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) ซึ่งเป็นแพลตฟอร์มจากผู้สร้าง Next.js

ดูรายละเอียดเพิ่มเติมได้ที่ [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)

## การพัฒนาเพิ่มเติม

หากต้องการแก้ไขหน้าเว็บ สามารถเริ่มต้นได้จากการแก้ไขไฟล์ `app/page.tsx` หน้าเว็บจะอัปเดตโดยอัตโนมัติเมื่อมีการแก้ไขไฟล์

## ทรัพยากรเพื่อการเรียนรู้

- [Next.js Documentation](https://nextjs.org/docs) - เรียนรู้เกี่ยวกับฟีเจอร์และ API ของ Next.js
- [Learn Next.js](https://nextjs.org/learn) - บทเรียน Next.js แบบ interactive
- [Material-UI Documentation](https://mui.com/) - เรียนรู้การใช้งาน MUI components
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - เรียนรู้ TypeScript

