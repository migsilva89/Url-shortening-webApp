let btnShortenIt = document.getElementById('btnShortenIt');
let userUrl = document.getElementById('userUrl');
let dynamicContent = document.getElementById('dynamicContent');

document.addEventListener("DOMContentLoaded", function () {
  
    var clipboard = new ClipboardJS('.btn-copy');
  
        clipboard.on('success', function (e) {
        //   console.info('Action:', e.action);
        //   console.info('Text:', e.text);
        //   console.info('Trigger:', e.trigger);
          
          e.trigger.textContent = 'Copied!'  
          e.trigger.classList.add('bg-black', 'hover:bg-black')
        });
  
        clipboard.on('error', function (e) {
            alert('Not Copied! Please try again.')
        //   console.info('Action:', e.action);
        //   console.info('Text:', e.text);
        //   console.info('Trigger:', e.trigger);
        });
});

btnShortenIt.addEventListener('click', function () {
    // console.log(userUrl.value)
       fetch(`https://api.shrtco.de/v2/shorten?url=${userUrl.value}`)
        .then(response => response.json())
        .then(data => {
            displayData(data.result.short_link, data.result.short_link2, data.result.short_link3, data.result.original_link)
            removeErrLayout()
        })
        .catch(err => addErrLayout());
})

function removeErrLayout() {
    let inputBox = document.getElementById('inputBox').classList.remove('border-red-500');
    let addLinkWarning = document.getElementById('addLinkWarning').classList.add('hidden');
    userUrl.classList.remove('placeholder-red-500')
}

function addErrLayout() {
    let inputBox = document.getElementById('inputBox').classList.add('border-red-500');
    let addLinkWarning = document.getElementById('addLinkWarning').classList.remove('hidden');
    userUrl.classList.add('placeholder-red-500')
    userUrl.value = ''
}

function displayData(link1, link2, link3, originalLink) {
    
    dynamicContent.innerHTML = `
    <section id="dynamicContent" class="bg-slate-100">
        <div class=" container mx-auto pt-24 ">
            <div class="bg-white flex justify-between rounded-xl p-5">
                <div class="py-3 px-8 text-black">
                    <a href="${originalLink}">${originalLink}</a>
                </div>
                <div class="flex gap-10 ">
                    <a class="text-cyann py-3 px-8" target="_blank" name="shortLink" href="https://${link1}">${link1}</a>
                    <button id="btnCopy" data-clipboard-text="https://${link1}" class="bg-cyann btn-copy text-white py-3 px-8 rounded-lg hover:bg-cyann2">Copy</button>
                </div>
            </div>
        </div>
    </section>
    <section id="dynamicContent" class="bg-slate-100">
        <div class=" container mx-auto pt-10 ">
            <div class="bg-white flex justify-between rounded-xl p-5">
                <div class="py-3 px-8 text-black">
                    <a href="${originalLink}">${originalLink}</a>
                </div>
                <div class="flex gap-10 ">
                    <a class="text-cyann py-3 px-8" target="_blank" name="shortLink" href="https://${link2}">${link2}</a>
                    <button id="btnCopy" data-clipboard-text="https://${link2}" class="bg-cyann btn-copy text-white py-3 px-8 rounded-lg hover:bg-cyann2">Copy</button>
                </div>
            </div>
        </div>
    </section>
    <section id="dynamicContent" class="bg-slate-100">
        <div class=" container mx-auto pt-10 ">
            <div class="bg-white flex justify-between rounded-xl p-5">
                <div class="py-3 px-8 text-black">
                    <a href="${originalLink}">${originalLink}</a>
                </div>
                <div class="flex gap-10 ">
                    <a class="text-cyann py-3 px-8" target="_blank" name="shortLink" href="https://${link3}">${link3}</a>
                    <button id="btnCopy" data-clipboard-text="https://${link3}" class="bg-cyann btn-copy text-white py-3 px-8 rounded-lg hover:bg-cyann2">Copy</button>
                </div>
            </div>
        </div>
    </section>
    `
}

