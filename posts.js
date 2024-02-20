"use strict";
const fetchPostBtn = document.getElementById("fetch-post");
const postsContainer = document.getElementById("posts-container");
const addPostForm = document.getElementById("addPostForm");
const wageForm = document.getElementById("wage-form");
const payDiv = document.getElementById("calculated-pay");
const addPost = ({ title, description, day }) => {
    const post = document.createElement("div");
    post.innerHTML = `
     <div
                        class="h-full block max-w-sm p-6 border rounded-lg shadow bg-gray-800 border-gray-700"
                    >
                        <h5
                            class="font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                            ${title}
                        </h5>
                        <span
                            class="text-xs font-medium my-3 inline-block px-3 py-1 bg-green-700 rounded-full"
                            >${day}</span
                        >
                        <p
                            class="text-sm font-normal text-gray-700 dark:text-gray-400"
                        >
                            ${description}
                        </p>
                    </div>
    `;
    postsContainer.appendChild(post);
};
fetchPostBtn.addEventListener("click", () => addPost({
    title: "random post",
    description: "description for random post",
    day: "mon",
}));
addPostForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(addPostForm);
    addPost({
        title: formData.get("title"),
        description: formData.get("description"),
        day: formData.get("day"),
    });
    addPostForm.reset();
});
wageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(wageForm);
    const hours = parseFloat(formData.get("hours"));
    const pay = parseFloat(formData.get("rate"));
    const totalPay = hours * pay;
    payDiv.innerText = `$${totalPay}`;
});
