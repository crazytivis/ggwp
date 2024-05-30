import React, { useState } from 'react';  // Импорт библиотеки React и хука useState
import Head from './Components/js/Head';  // Импорт компонента Head
import PostList from './Components/js/PostList';  // Импорт компонента PostList
import CreatePost from './Components/js/CreatePost';  // Импорт компонента CreatePost
import '../../untitled/src/App.css';  // Импорт стилей для компонента App

function App() {
  const [posts, setPosts] = useState([]);  // Создание состояния posts с помощью хука useState
  const [archive, setArchive] = useState([]);  // Создание состояния archive с помощью хука useState

  const handleSubmit = (newPost) => {
    setPosts([...posts, newPost]);  // Функция для добавления нового поста в список
  };

  const handleArchiveClick = (title) => {
    const archivedPost = posts.find(post => post.title === title);  // Поиск поста для архивирования

    if (archivedPost) {
      const updatedPosts = posts.filter(post => post.title !== title);  // Фильтрация списка постов для удаления архивированного поста
      setPosts(updatedPosts);  // Обновление списка постов
      setArchive([...archive, archivedPost]);  // Добавление архивированного поста в архив
    }
  };

  const handleDeleteClick = (title) => {
    const updatedPosts = posts.filter(post => post.title !== title);  // Фильтрация списка постов для удаления выбранного поста
    setPosts(updatedPosts);  // Обновление списка постов
  };

  return (
      <div className="App">  {/* Разметка основного компонента */}
        <Head />  {/* Вставка компонента Head */}
        <div className="blog-content">  {/* Разметка для отображения списка постов и формы создания поста */}
          <PostList posts={posts} handleDeleteClick={handleDeleteClick} handleArchiveClick={handleArchiveClick} />  {/* Передача списка постов и обработчиков событий в компонент PostList */}
          <CreatePost onSubmit={handleSubmit} archive={archive} />  {/* Передача функции для добавления поста и архива в компонент CreatePost */}
        </div>
      </div>
  );
}

export default App;
