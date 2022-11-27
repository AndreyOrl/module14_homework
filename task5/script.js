const numForm = document.forms["numForm"];
const alert = document.querySelector(".alert");
const imageWrapper = document.querySelector("#imageWrapper");

const rangeChecker = (numLow, numHigh, num) => {
    if (num.isNan) {
        return false;
    } else if (num <= numHigh && num >= numLow) {
        return true;
    } else {
        return false;
    }
};

const submitNumForm = (event) => {
    event.preventDefault();

    const pageNumber = event.target["page_number"];
    const limit = event.target["limit"];

    imageWrapper.innerHTML = "";
    alert.classList.add("isHidden");

    pageNumber.classList = "";
    limit.classList = "";

    if (
        !rangeChecker(1, 10, pageNumber.value) &&
        !rangeChecker(1, 10, limit.value)
    ) {
        alert.innerHTML =
            "Номер страницы и лимит вне диапазона от 1 до 10";
        alert.classList.remove("isHidden");
        pageNumber.classList = "invalid";
        limit.classList = "invalid";
    } else if (!rangeChecker(1, 10, pageNumber.value)) {
        alert.innerHTML =
            "Номер страницы вне диапазона от 1 до 10";
        alert.classList.remove("isHidden");
        pageNumber.classList = "invalid";
    } else if (!rangeChecker(1, 10, limit.value)) {
        alert.innerHTML = "Лимит вне диапазона от 1 до 10";
        alert.classList.remove("isHidden");
        limit.classList = "invalid";
    } else {
        pageNumber.classList = "valid";
        limit.classList = "valid";
        fetch(
            ` https://picsum.photos/v2/list?page=${pageNumber.value}&limit=${limit.value}`
        )
            .then((response) => response.json())
            .then((entries) => {
                entries.map((entry) => {
                    imageWrapper.innerHTML += `<div class="form__wrapper">
                    <div class="form__box">
                        <div class="form__images">
                            <img src="${entry.download_url}" alt="server error" class="form__image">
                            
                        </div>
                        <div class="form__image-title">
                            <span class="form__image-author">
                                ${entry.author}
                            </span>
                        </div>
                    </div>
                </div>`;
                });
                window.localStorage.setItem(
                    "SkillFactoryTest",
                    JSON.stringify(imageWrapper.innerHTML)
                );
            })
            .catch((error) => console.log("error: ", error));
    }
};

imageWrapper.innerHTML = JSON.parse(
    window.localStorage.getItem("SkillFactoryTest")
);

numForm.addEventListener("submit", submitNumForm);