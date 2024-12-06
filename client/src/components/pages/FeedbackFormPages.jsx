import * as Yup from 'yup';
import React from "react";
const MyForm = Yup.object({
  name: Yup.string()
    .required('Имя обязательно')
    .min(2, 'Имя должно содержать минимум 2 символа'),
  email: Yup.string().required('Email обязателен').email('Некорректный email'),
  phone: Yup.string()
    .required('Телефон обязателен')
    .matches(/^\+?[1-9]\d{1,14}$/, 'Некорректный формат телефона'),
  model: Yup.string().required('Модель обязательна'),
  img: Yup.string().required('Изображение обязательно').url('Некорректное изображение'),
});

export default MyForm;
