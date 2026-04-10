# 🚀 Taskora - Project Management Dashboard

**Taskora** là một nền tảng quản lý công việc hiện đại, giúp người dùng theo dõi dự án, deadline và quản lý nhóm một cách trực quan. Dự án được xây dựng với tư duy "Component-Driven" và quản lý trạng thái thông minh qua URL.

---

## 🛠 Tech Stack

Hệ thống được xây dựng trên nền tảng các công nghệ mạnh mẽ nhất 2026:

* **Core:** [React 18+](https://react.dev/) & [Vite](https://vitejs.dev/) 
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Routing:** [React Router v7](https://reactrouter.com/) 
* **Components:** [Headless UI](https://headlessui.com/) & [Heroicons](https://heroicons.com/)
* **Utilities:** `clsx`, `tailwind-merge`

## 📂 Cấu trúc thư mục

```text
src/
├── components/      # Các component dùng chung
│   ├── shared/      # Sidebar, Header, SearchInput...
│   ├── ui/          # Button, Badge, Avatar (Primitive UI)
│   └── layouts/     # Định nghĩa khung trang (MainLayout, AuthLayout)
├── features/        # Logic & Components theo tính năng (Project, Tasks)
├── hooks/           # Custom hooks (useSearch, useProjectFilter)
├── types/           # Định nghĩa TypeScript interfaces/types toàn cục
├── utils/           # Helper functions (cn helper, formatters)
└── views/           # Các trang chính (Dashboard, Projects Page)
```

## 🚀 Cài đặt & Chạy dự án
1. Yêu cầu hệ thống
* Node.js: v20.x trở lên
* Package Manager: npm (đi kèm Node.js)

2. Thiết lập dự án
# Clone dự án
git clone [https://github.com/your-username/taskora.git](https://github.com/your-username/taskora.git)

# Di chuyển vào thư mục dự án
cd taskora

# Cài đặt thư viện
npm install

3. Chạy dự án
npm run dev