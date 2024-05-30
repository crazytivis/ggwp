import React from 'react';  // Импорт библиотеки React
import '../CSS/Archive.css';  // Импорт стилей для компонента Archive

function Archive({ archive }) {
    return (
        <div className="archive">  {/* Разметка компонента Archive */}
            <h2>Архив</h2>  {/* Заголовок "Архив" */}

            <ul>
                {archive.map((post, index) => (  // Отображение списка архивированных постов
                    <li key={index}>{post.title}</li>  // Отображение заголовка каждого архивированного поста
                ))}
            </ul>

        </div>
    );
}

export default Archive;  // Экспорт компонента Archive для использования в других частях приложения
