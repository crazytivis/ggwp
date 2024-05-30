import React from 'react';  // Импорт библиотеки React
import '../CSS/Post.css';  // Импорт стилей для компонента Post

function Post({ post, handleDeleteClick, handleArchiveClick }) {
    return (
        <article className="blog-post">  {/* Разметка компонента Post */}
            <h1>{post.title}</h1>  {/* Отображение заголовка поста */}

            <p>Автор: <span><b>{post.author}</b></span></p>  {/* Отображение информации об авторе поста */}

            <p>Категория: <span><b>{post.category}</b></span></p>  {/* Отображение информации о категории поста */}

            <p>{post.content}</p>  {/* Отображение содержания поста */}

            <div className="buttons">  {/* Разметка для кнопок */}
                <button className="delete-button" onClick={() => handleDeleteClick(post.title)}>Удалить</button>  {/* Кнопка для удаления поста */}
                <button className="archive-button" onClick={() => handleArchiveClick(post.title)}>Поместить в архив</button>  {/* Кнопка для архивирования поста */}
            </div>

        </article>
    );
}

export default Post;  // Экспорт компонента Post для использования в других частях приложения
