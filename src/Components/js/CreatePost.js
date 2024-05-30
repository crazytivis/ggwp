import React, { useState } from 'react';  // Импорт библиотеки React и хука useState
import Archive from './Archive.js';  // Импорт компонента Archive
import '../CSS/CreatePost.css';  // Импорт стилей для компонента CreatePost

function CreatePost({ onSubmit, archive }) {
    const [title, setTitle] = useState('');  // Создание состояния title с помощью хука useState
    const [author, setAuthor] = useState('');  // Создание состояния author с помощью хука useState
    const [category, setCategory] = useState('');  // Создание состояния category с помощью хука useState
    const [content, setContent] = useState('');  // Создание состояния content с помощью хука useState

    const handleSubmit = (e) => {
        e.preventDefault();  // Предотвращение стандартного поведения формы

        onSubmit({ title, author, category, content });  // Вызов функции onSubmit с данными нового поста

        setTitle('');  // Очистка состояния title
        setCategory('');  // Очистка состояния category
        setAuthor('');  // Очистка состояния author
        setContent('');  // Очистка состояния content
    };

    return (
        <aside className="create-post">  {/* Разметка компонента CreatePost */}
            <h2>Создать запись</h2>  {/* Заголовок "Создать запись" */}

            <form onSubmit={handleSubmit}>  {/* Форма для создания нового поста */}
                <div>
                    <label htmlFor="author">Автор:</label>
                    <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />  {/* Поле для ввода автора */}
                </div>

                <div>
                    <label htmlFor="title">Заголовок:</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />  {/* Поле для ввода заголовка */}
                </div>

                <div>
                    <label htmlFor="category">Категория:</label>
                    <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />  {/* Поле для ввода категории */}
                </div>

                <div>
                    <label htmlFor="content">Содержание:</label>
                    <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />  {/* Поле для ввода содержания */}
                </div>

                <button type="submit" className="create-button">Создать</button>  {/* Кнопка для отправки формы создания поста */}
            </form>
            <Archive archive={archive} />  {/* Вставка компонента Archive с передачей архива */}
        </aside>
    );
}

export default CreatePost;  // Экспорт компонента CreatePost для использования в других частях приложения
