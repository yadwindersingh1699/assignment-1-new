const fetchPostBtn = document.getElementById("fetch-post") as HTMLButtonElement;
const postsContainer = document.getElementById(
    "posts-container"
) as HTMLDivElement;
const addPostForm = document.getElementById("addPostForm") as HTMLFormElement;
const wageForm = document.getElementById("wage-form") as HTMLFormElement;
const payDiv = document.getElementById("calculated-pay") as HTMLDivElement;

type days = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
type post = {
    title: string;
    description: string;
    day: days;
};
const addPost = ({ title, description, day }: post): void => {
    const post = document.createElement("div") as HTMLDivElement;
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

fetchPostBtn.addEventListener("click", () =>
    addPost({
        title: "random post",
        description: "description for random post",
        day: "mon",
    })
);

addPostForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(addPostForm);

    addPost({
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        day: formData.get("day") as days,
    });

    addPostForm.reset();
});

wageForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(wageForm);
    const hours: number = parseFloat(formData.get("hours") as string);

    const pay: number = parseFloat(formData.get("rate") as string);

    const totalPay = hours * pay;

    payDiv.innerText = `$${totalPay}`;
});
