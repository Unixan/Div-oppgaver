function mainView() {
  let html = "";
  html += /*HTML*/ `
    <div class="animate" onclick="show()">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id odit eius veniam fugiat, laborum tempore, cumque enim sint, architecto quibusdam labore quisquam ducimus saepe distinctio! Adipisci maiores quos eaque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id odit eius veniam fugiat, laborum tempore, cumque enim sint, architecto quibusdam labore quisquam ducimus saepe distinctio! Adipisci maiores quos eaque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id odit eius veniam fugiat, laborum tempore, cumque enim sint, architecto quibusdam labore quisquam ducimus saepe distinctio! Adipisci maiores quos eaque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id odit eius veniam fugiat, laborum tempore, cumque enim sint, architecto quibusdam labore quisquam ducimus saepe distinctio! Adipisci maiores quos eaque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id odit eius veniam fugiat, laborum tempore, cumque enim sint, architecto quibusdam labore quisquam ducimus saepe distinctio! Adipisci maiores quos eaque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id odit eius veniam fugiat, laborum tempore, cumque enim sint, architecto quibusdam labore quisquam ducimus saepe distinctio! Adipisci maiores quos eaque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id odit eius veniam fugiat, laborum tempore, cumque enim sint, architecto quibusdam labore quisquam ducimus saepe distinctio! Adipisci maiores quos eaque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id odit eius veniam fugiat, laborum tempore, cumque enim sint, architecto quibusdam labore quisquam ducimus saepe distinctio! Adipisci maiores quos eaque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id odit eius veniam fugiat, laborum tempore, cumque enim sint, architecto quibusdam labore quisquam ducimus saepe distinctio! Adipisci maiores quos eaque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id odit eius veniam fugiat, laborum tempore, cumque enim sint, architecto quibusdam labore quisquam ducimus saepe distinctio! Adipisci maiores quos eaque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id odit eius veniam fugiat, laborum tempore, cumque enim sint, architecto quibusdam labore quisquam ducimus saepe distinctio! Adipisci maiores quos eaque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id odit eius veniam fugiat, laborum tempore, cumque enim sint, architecto quibusdam labore quisquam ducimus saepe distinctio! Adipisci maiores quos eaque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id odit eius veniam fugiat, laborum tempore, cumque enim sint, architecto quibusdam labore quisquam ducimus saepe distinctio! Adipisci maiores quos eaque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id odit eius veniam fugiat, laborum tempore, cumque enim sint, architecto quibusdam labore quisquam ducimus saepe distinctio! Adipisci maiores quos eaque.
    </div>
    `;
  document.getElementById("app").innerHTML = html;
}

function show(){
    const box = document.querySelector(".animate")
    box.classList.toggle("show")
}
