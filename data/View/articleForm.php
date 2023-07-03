<main>
    <div class="flashMessage">
        <p id="fMessage"></p>
    </div>
    <h2 class="textCenter">Write an Article</h2>
    <div id="article Form">
        <form action="" method="POST" id="articleForm" class="">
            <label for="title">Title</label>
            <input type="text" name="title" id="title">
            <p class="validate" id="validateTitle"></p>
            <label for="category">category</label>
            <select name="category" id="category">
            </select>
            <label for="content">Article Text</label>
            <textarea name="content" id="content" cols="100" rows="25"></textarea>
            <p class="validate" id="validateContent"></p>
            <div class="articleFormSender flex">
                <div class="articleFormSub">
                    <input type="checkbox" name="isPrivate" id="isPrivate" value="1">
                    <label for="isPrivate">make this content private</label>
                </div>
                <div class="articleFormSub">
                    <button type="submit" name="submitArticle" id="submitArticle">
                        Submit Article
                    </button>
                </div>
            </div>

        </form>
    </div>
</main>
</body>


</html>