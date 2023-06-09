<main>
    <div class="flashMessage">
        <p id="fMessage"></p>
    </div>
    <h3>Write A Blog</h3>
    <div id="article Form">
        <form action="" method="POST" id="articleForm" class="">
            <label for="title">Title</label>
            <input type="text" name="title" id="title">
            <p class="validate" id="validateTitle"></p>
            <label for="category">category</label>
            <select name="category" id="category">
            </select>
            <label for="content">Article Text</label>
            <textarea name="content" id="content" cols="100" rows="30"></textarea>
            <p class="validate" id="validateContent"></p>
            <input type="checkbox" name="isPrivate" id="isPrivate">
            <label for="isPrivate">make this content private</label>
            <button type="submit" name="submitArticle">
                Submit Article
            </button>
        </form>
    </div>
</main>
</body>


</html>