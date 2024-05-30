import React from 'react';  // Импорт библиотеки React
import '../CSS/Head.css';  // Импорт стилей для компонента Head

function Head() {
    return (
        <header className="blog-header">  {/* Разметка компонента Head */}
            <h1>Блог</h1>  {/* Заголовок "Блог" */}
        </header>
    );
}
export default Head;  // Экспорт компонента Head для использования в других частях приложения
