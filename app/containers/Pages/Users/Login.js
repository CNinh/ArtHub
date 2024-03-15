import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { LoginForm } from 'dan-components';
import useStyles from 'dan-components/Forms/user-jss';
import Swal from 'sweetalert2';

const Login = () => {
  const { classes } = useStyles();
  const history = useHistory(); // Khởi tạo useHistory

  // Hàm xử lý khi người dùng submit form đăng nhập
  const handleSubmit = async (values) => {
    try {
      // Gửi yêu cầu POST tới API login
      const response = await fetch('http://localhost:8080/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values), // Gửi email và password người dùng nhập
      });

      // Kiểm tra phản hồi từ API
      if (response.ok) {
        const data = await response.json();
        // Lưu trữ access token và refresh token nếu đăng nhập thành công
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        // Chuyển hướng đến trang Art sau khi đăng nhập thành công
        history.push('/art');
      } else {
        // Hiển thị thông báo SweetAlert
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Kiểm tra lại email hoặc password!',
        });
        console.error('Login failed');
      }
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error('Error:', error);
    }
  };

  const title = brand.name + ' - Login';
  const description = brand.desc;

  return (
    <div className={classes.root}>
      {/* <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet> */}
      <div className={classes.container}>
        <div className={classes.userFormWrap}>
          {/* Truyền hàm handleSubmit vào prop onSubmit của component LoginForm */}
          <LoginForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Login;
