document.getElementById("translateBtn").addEventListener("click", async () => {

    const inputText = document.getElementById("inputText").value;
    const fromLang = document.getElementById("fromLang").value;
    const toLang = document.getElementById("toLang").value;
    const outputText = document.getElementById("outputText");

    if (inputText.trim() === "") {
        outputText.value = "Please enter text";
        return;
    }

    outputText.value = "Translating...";

    try {

        const response = await fetch(
            "https://api.mymemory.translated.net/get?q=" 
            + encodeURIComponent(inputText)
            + "&langpair="
            + fromLang
            + "|"
            + toLang
        );

        const data = await response.json();

        if (data.responseData.translatedText) {

            outputText.value =
            data.responseData.translatedText;

        } else {

            outputText.value = "Translation failed";

        }

    } catch (error) {

        console.log(error);
        outputText.value = "Connection error";

    }

});