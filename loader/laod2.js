(function() {
    'use strict';

    function searchAndExecute() {
        const dialogElement = document.getElementById("dialogex");

        if (dialogElement) {
            const url = "https://raw.githubusercontent.com/musaalif6969/krunker/main/remote-fetch/status.html";
            const contentDiv = document.getElementById("content");

            fetch(url)
                .then(response => response.text())
                .then(html => {
                    contentDiv.innerHTML = html;
                })
                .catch(error => {
                    contentDiv.textContent = "An error occurred while fetching the content.";
                    console.error(error);
                });

            insertElement(); // Insert the new menu item with GIF animation
        } else {
            setTimeout(searchAndExecute, 1000); // Continue searching every 1 second
        }
    }

    function insertElement() {
        var targetElement = document.querySelector('.menuItem');
        if (!targetElement) {
            setTimeout(insertElement, 1000);
            return;
        }

        var newElement = document.createElement('div');
        newElement.className = 'menuItem';

        newElement.innerHTML = `
            <div class="menuItem">
                <span class="menBtnIcn" style="color:#d747f5">
                    <img src="https://raw.githubusercontent.com/musaalif6969/krunker/main/img-src/sidebar.gif" alt="GIF" style="transform: scale(1); transition: transform 0.3s;">
                    <style>
                        @keyframes rotateAnimation {
                            0% {
                                transform: scale(1) rotate(0deg);
                            }
                            100% {
                                transform: scale(1.5) rotate(360deg);
                            }
                        }

                        .menBtnIcn:hover img {
                            animation: rotateAnimation 1s ease-in-out forwards;
                        }
                    </style>
                </span>
                <div class="menuItemTitle" id="menuBtnSocial">Midnight</div>
            </div>
        `;

        targetElement.parentNode.insertBefore(newElement, targetElement.nextSibling);

        // Add click event listener to the added element
        var gifElement = newElement.querySelector('.menBtnIcn img');
        gifElement.addEventListener('click', function() {
            var dialog = document.getElementById('dialogex');
            if (dialog) {
                if (dialog.style.display === 'none') {
                    dialog.style.display = 'block'; // Show the element
                } else {
                    dialog.style.display = 'none'; // Hide the element
                }
            } else {
                console.log('The element with id "dialogex" was not found.');
            }
        });
    }

    searchAndExecute();
})();
