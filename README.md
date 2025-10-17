# To-Do List (React + Vite)

Ứng dụng To-Do List xây dựng theo tư duy React: Component, Props, State. Giai đoạn đầu có UI với dữ liệu giả (hard-coded). Sau đó dùng `useState` để quản lý thêm/xoá/sửa/đánh dấu hoàn thành.

## Cấu trúc thư mục

```
projectToDoList/
├─ index.html
├─ package.json
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ styles.css
│  └─ components/
│     ├─ TodoForm.jsx
│     ├─ TodoList.jsx
│     └─ TodoItem.jsx
```

## Chạy dự án

1. Cài đặt phụ thuộc:

```bash
npm install
```

2. Chạy môi trường phát triển:

```bash
npm run dev
```

3. Mở URL do Vite cung cấp (ví dụ: http://localhost:5173).

## Ghi chú học tập

- `App.jsx` giữ `state` danh sách công việc và truyền xuống `props` cho `TodoList` và `TodoForm`.
- `TodoForm` nhận `onAdd` để thêm công việc mới.
- `TodoList` nhận `todos` và các handler `onToggle`, `onDelete`, `onEdit` và chuyển cho từng `TodoItem`.
- `TodoItem` có UI chỉnh sửa nội bộ, khi lưu sẽ gọi `onEdit(id, newTitle)` để cập nhật state ở `App.jsx`.
- Ban đầu danh sách có dữ liệu giả để thể hiện UI trước khi có logic động.
