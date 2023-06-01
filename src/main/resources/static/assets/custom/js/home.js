
function operateBox() {
    const length = $("#length").val()
    const width = $("#width").val()
    const height = $("#height").val()
    const weight = $("#weight").val()
    const gap = $("#gap").val()
    console.log(width, height, length, gap, weight)
    if(length == "" || width == "" || height == "" || weight == "" || gap == "") {
        showToast("error", "入力エラー", "値を全て入力してください。")
        return
    }

    
}


$(document).ready(() => {
    $("#operate_box").click(() => {
        operateBox()
    })
})

function showToast(type, title, msg) {
    toastr.options = {
        maxOpened: 1,
        autoDismiss: true,
        closeButton: true,
        debug: false,
        newestOnTop: false,
        progressBar: false,
        positionClass: 'toast-top-right',
        preventDuplicates: false,
        onclick: null,
        showDuration: 100,
        hideDuration: 1000
    };
    // toastr.options.showDuration = 300
    toastr[type](msg, title);
}


function openCreateModal() {
    document.getElementById('add-new-record').setAttribute('class', 'offcanvas offcanvas-end show');
    document.getElementById('add-new-record').setAttribute('aria-modal', 'true');
    document.getElementById('add-new-record').setAttribute('role', 'dialog');
    let a = document.createElement('div');
    //  class="offcanvas-backdrop fade show"
    a.setAttribute("class", "offcanvas-backdrop fade show")
    a.setAttribute("id", "backdrop")
    a.setAttribute("onclick", "closeCreateModal()")
    document.getElementById('add-new-record').insertAdjacentElement('afterend', a)
}

function closeCreateModal() {
    document.getElementById('add-new-record').setAttribute('class', 'offcanvas offcanvas-end');
    document.getElementById("backdrop").remove()
}

function createBorder() {
    let companySize = $("#companySize").val()
    let shippingSize = $("#shippingSize").val()
    let cardboardNo = $("#cardboardNo").val()
    let cardboardType = $("#cardboardType").val()
    let lengthOuter = $("#lengthOuter").val()
    let widthOuter = $("#widthOuter").val()
    let heightOuter = $("#heightOuter").val()
    let dimensionalWeight = $("#dimensionalWeight").val()
    let remark = $("#remark").val()
    $.post(
        "/cardboard/add-cardboard",
        {
            companySize: companySize,
            shippingSize: shippingSize,
            cardboardNo: cardboardNo,
            cardboardType: cardboardType,
            lengthOuter: lengthOuter,
            widthOuter: widthOuter,
            heightOuter: heightOuter,
            dimensionalWeight: dimensionalWeight,
            remark: remark
        },
        (resp) => {
            console.log(resp.data)
            try{
                if(resp.data == "created new border") {
                    
                }
            }
            catch {

            }
        }
    )
}

function createNewBorder() {
    let companySize = $("#companySize").val()
    let shippingSize = $("#shippingSize").val()
    let cardboardNo = $("#cardboardNo").val()
    let cardboardType = $("#cardboardType").val()
    let lengthOuter = $("#lengthOuter").val()
    let widthOuter = $("#widthOuter").val()
    let heightOuter = $("#heightOuter").val()
    let dimensionalWeight = $("#dimensionalWeight").val()
    let remark = $("#remark").val()
    if(companySize=="" || shippingSize=="" || cardboardNo=="" || cardboardType=="" || lengthOuter=="" || widthOuter=="" || heightOuter=="" || dimensionalWeight=="" ) {
        document.querySelector('[data-bs-target="#confirmModal"]').click();
        return
    }
    // createBorder()
    console.log(companySize,
        shippingSize,
        cardboardNo,
        cardboardType,
        lengthOuter,
        widthOuter,
        heightOuter,
        dimensionalWeight,
        remark
    )
}
