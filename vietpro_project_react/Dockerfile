# Sử dụng một image chính thức của Node.js phiên bản 20 làm base image
FROM node:20-alpine

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép file 'package.json' và 'package-lock.json' (nếu có) vào thư mục làm việc
COPY package*.json ./

# Cài đặt các phụ thuộc của ứng dụng
RUN npm install -g npm@10.5.0
RUN npm install --legacy-peer-deps

# Sao chép tất cả các file còn lại từ thư mục gốc của dự án vào thư mục làm việc trong container
COPY . .

# Xây dựng ứng dụng cho production
RUN npm run build

# Cài đặt serve để chạy ứng dụng React
RUN npm install -g serve

# Khai báo port mà ứng dụng sẽ chạy
EXPOSE 3000

# Chạy ứng dụng React với serve
CMD ["serve", "-s", "build", "-l", "3000"]
