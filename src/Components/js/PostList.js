import React from 'react';  // Импорт библиотеки React
import Post from './Post';  // Импорт компонента Post
import '../CSS/PostList.css';  // Импорт стилей для компонента PostList

function PostList({ posts, handleDeleteClick, handleArchiveClick }) {
    return (
        <div className="post-list">  {/* Рендер контейнера для списка постов */}
            <div className="post-title">  {/* Рендер заголовка для списка постов */}
                <h2>Записи</h2>
            </div>

            {posts.map((post, index) => (  // Проход по массиву постов и рендер каждого поста с помощью компонента Post
                <Post key={index} post={post} handleDeleteClick={handleDeleteClick} handleArchiveClick={handleArchiveClick}/>
            ))}

        </div>
    );
}

export default PostList;  // Экспорт компонента PostList для использования в других частях приложения