
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

function initCreateModal(
    cardboardId = "",
    companySize = "",
    shippingSize = "",
    cardboardNo = "",
    cardboardType = "",
    lengthOuter = "",
    widthOuter = "",
    heightOuter = "",
    dimensionalWeight = "",
    remark = ""
) {
    console.log(companySize,shippingSize,
        cardboardNo,
        cardboardType,
        lengthOuter,
        widthOuter,
        heightOuter,
        dimensionalWeight,
        remark,)
    if(cardboardId == "") {
        $("#createNewBordTempBtn").text("作成")
        $("#createNewBoardBtn").text("作成")
    }else {
        $("#createNewBordTempBtn").text("変更")
        $("#createNewBoardBtn").text("変更")
    }
    $("#cardboardId").val(cardboardId)
    $("#companySize").val(companySize)
    $("#shippingSize").val(shippingSize)
    $("#cardboardNo").val(cardboardNo)
    $("#cardboardType").val(cardboardType)
    $("#lengthOuter").val(lengthOuter)
    $("#widthOuter").val(widthOuter)
    $("#heightOuter").val(heightOuter)
    $("#dimensionalWeight").val(dimensionalWeight)
    $("#remark").val(remark)
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
    closeCreateModal()
    let companySize = $("#companySize").val()
    let shippingSize = $("#shippingSize").val()
    let cardboardNo = $("#cardboardNo").val()
    let cardboardType = $("#cardboardType").val()
    let lengthOuter = $("#lengthOuter").val()
    let widthOuter = $("#widthOuter").val()
    let heightOuter = $("#heightOuter").val()
    let dimensionalWeight = $("#dimensionalWeight").val()
    let remark = $("#remark").val()
    let cardboardId = $("#cardboardId").val()
    
    let data = {
        companySize: companySize,
        shippingSize: shippingSize,
        cardboardNo: cardboardNo,
        cardboardType: cardboardType,
        lengthOuter: lengthOuter,
        widthOuter: widthOuter,
        heightOuter: heightOuter,
        dimensionalWeight: dimensionalWeight,
        remark: remark
    }
    if(cardboardId == "") {
        $("#createNewBordTempBtn").text("作成")
        $("#createNewBoardBtn").text("作成")
        $.post(
            "/cardboard/add-cardboard",
            data,
            (resp) => {
                console.log(resp)
                try{
                    if(resp == "created new board") {
                        location.reload()
                    }
                }
                catch {
                    showToast("success", "Create", "Unknown Error")
                }
            }
        )
    }else {
        data.id = cardboardId
        console.log(data)
        $("#createNewBordTempBtn").text("変更")
        $("#createNewBoardBtn").text("変更")
        $.post(
            "/cardboard/modify-cardboard",
            data,
            (resp) => {
                console.log(resp)
                try{
                    if(resp == "modified board") {
                        location.reload()
                    }
                }
                catch {
                    showToast("error", "Modify", "Unknown Error")
                }
            }
        )
    }
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
    createBorder()
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

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function openDeleteModal(id) {
    $("#deleteId").val(id)
    document.querySelector('[data-bs-target="#deleteConfirmModal"]').click();
}

function deleteBoard() {
    let id = $("#deleteId").val()
    $.post(
        "/cardboard/delete-cardboard",
        {id: id},
        (resp) => {
            console.log(resp)
            try{
                if(resp == "deleted board") {
                    location.reload()
                }
            }
            catch {
                showToast("success", "Delete", "Unknown Error")
            }
        }
    )
    
}

$(document).ready(() => {
    a = [['1','60','40','ケータイ','200','130','61','0.5'],['1','60','40','ケータイ','130','200','61','0.5'],['1','60','26','カメラ（小）','250','201','152','1.5'],['1','60','26','カメラ（小）','201','250','152','1.5'],['2','80','25','カメラ（大）','400','249','153','3.5'],['2','80','25','カメラ（大）','249','400','153','3.5'],['3','100','11','14A','378','373','200','6'],['3','100','11','14A','373','378','200','6'],['3','100','6','ノートパソコン','487','410','101','4.5'],['3','100','6','ノートパソコン','410','487','101','4.5'],['4','120','10','14B - 2段加工','375','375','260','8'],['4','120','20','デッキ（小） - 1段加工','487','408','140','6'],['4','120','20','デッキ（小） - 1段加工','408','487','140','6'],['4','120','10','14B - 1段加工','375','375','310','9'],['4','120','19','デッキ（中） - 2段加工','500','450','110','5'],['4','120','19','デッキ（中） - 2段加工','450','500','110','5'],['4','120','21','デッキ（小B） - 1段加工','550','350','170','7'],['4','120','21','デッキ（小B） - 1段加工','350','550','170','7'],['4','120','20','デッキ（小）','487','408','180','7.5'],['4','120','20','デッキ（小）','408','487','180','7.5'],['4','120','21','デッキ（小B）','550','350','185','7.5'],['4','120','21','デッキ（小B）','350','550','185','7.5'],['4','120','19','デッキ（中） - 1段加工','500','450','170','8'],['4','120','19','デッキ（中） - 1段加工','450','500','170','8'],['4','120','10','14B','375','375','377','11'],['4','120','19','デッキ（中）','500','450','212','10'],['4','120','19','デッキ（中）','450','500','212','10'],['4','120','18','デッキ（大） - 2段加工','534','485','180','10'],['4','120','18','デッキ（大） - 2段加工','485','534','180','10'],['5','140','24','ラジカセ用 - 2段加工','552','319','360','13'],['5','140','24','ラジカセ用 - 2段加工','319','552','360','13'],['5','140','24','ラジカセ用 - 2段加工','552','319','360','13'],['5','140','24','ラジカセ用 - 1段加工','552','319','410','15'],['5','140','24','ラジカセ用 - 1段加工','319','552','410','15'],['5','140','18','デッキ（大） - 1段加工','534','485','270','15'],['5','140','18','デッキ（大） - 1段加工','485','534','270','15'],['5','140','18','デッキ（大）','534','485','313','17'],['5','140','18','デッキ（大）','485','534','313','17'],['5','140','24','ラジカセ用 ','552','319','473','18'],['5','140','24','ラジカセ用 ','319','552','473','18'],['5','140','17','デッキ（特）','563','550','266','17'],['5','140','17','デッキ（特）','550','563','266','17'],['5','140','46','バイオリン','840','330','210','12'],['5','140','46','バイオリン','330','840','210','12'],['5','140','15','SP（小） - 1段加工','560','318','520','19'],['5','140','15','SP（小） - 1段加工','318','560','520','19'],['6','160','42','トールボーイ','321','400','730','20'],['6','160','42','トールボーイ','400','321','730','20'],['6','160','47','ギターアンプ - 2段加工','800','360','310','18'],['6','160','47','ギターアンプ - 2段加工','360','800','310','18'],['6','160','15','SP（小）','560','318','602','22'],['6','160','15','SP（小）','318','560','602','22'],['6','160','37','一体型 - 1段加工','600','500','410','25'],['6','160','37','一体型 - 1段加工','500','600','410','25'],['6','160','44','17用(大) ','613','598','316','24'],['6','160','44','17用(大) ','598','613','316','24'],['6','160','16','SP（中）','435','380','736','25'],['6','160','16','SP（中）','380','435','736','25'],['6','160','23','エレキギター','390','90','1110','8'],['6','160','23','エレキギター','90','390','1110','8'],['6','160','45','新ラジカセ用','800','325','476','26'],['6','160','45','新ラジカセ用','325','800','476','26'],['6','160','37','一体型','600','500','502','31'],['6','160','37','一体型','500','600','502','31'],['7','180','47','ギターアンプ - 1段加工','800','360','510','30'],['7','180','47','ギターアンプ - 1段加工','360','800','510','30'],['ラージ便 170','170','47','ギターアンプ - 1段加工','800','360','510','30'],['ラージ便 170','170','47','ギターアンプ - 1段加工','360','800','510','30'],['7','180','41','ベース','390','90','1230','9'],['7','180','41','ベース','90','390','1230','9'],['ラージ便 180','180','41','ベース','390','90','1230','9'],['ラージ便 180','180','41','ベース','90','390','1230','9'],['7','180','14','スピーカー（大）','495','434','782','35'],['7','180','14','スピーカー（大）','434','495','782','35'],['ラージ便 180','180','14','スピーカー（大）','495','434','782','35'],['ラージ便 180','180','14','スピーカー（大）','434','495','782','35'],['7','180','47','ギターアンプ','800','360','642','38'],['7','180','47','ギターアンプ','360','800','642','38'],['ラージ便 180','180','47','ギターアンプ','800','360','642','38'],['ラージ便 180','180','47','ギターアンプ','360','800','642','38'],['7','180','22','アコギ - 1段加工','495','200','1110','23'],['7','180','22','アコギ - 1段加工','200','495','1110','23'],['ラージ便 180','180','22','アコギ - 1段加工','495','200','1110','23'],['ラージ便 180','180','22','アコギ - 1段加工','200','495','1110','23'],['8','200','22','アコギ','495','200','1190','24'],['8','200','22','アコギ','200','495','1190','24'],['ラージ便 200','200','22','アコギ','495','200','1190','24'],['ラージ便 200','200','22','アコギ','200','495','1190','24'],['8','200','48','シンセサイザー用','150','400','1450','18'],['8','200','48','シンセサイザー用','400','150','1450','18'],['ラージ便 200','200','48','シンセサイザー用','150','400','1450','18'],['ラージ便 200','200','48','シンセサイザー用','400','150','1450','18'],['ラージ便 240','240','13','スピーカー（特大）','590','560','1108','74'],['ラージ便 240','240','13','スピーカー（特大）','560','590','1108','74'],['50','','','ハコベル 300 (引き取り可)','','','',''],['51','','','ハコベル 350 (引き取り可)','','','',''],['52','','','ハコベル 400 (引き取り可)','','','',''],['53','','','ハコベル 450 (引き取り可)','','','',''],['54','','','ハコベル 500 (引き取り可)','','','',''],['55','','','ハコベル 550 (引き取り可)','','','',''],]
    for(let i = 0; i < a.length; i ++){
        delay(i * 1000).then(() => {
        companySize = a[i][0]
        shippingSize = a[i][1]
        cardboardNo = a[i][2]
        cardboardType = a[i][3]
        lengthOuter = a[i][4]
        widthOuter = a[i][5]
        heightOuter = a[i][6]
        dimensionalWeight = a[i][7]
        remark = ""
        // console.log(companySize, shippingSize, cardboardNo, cardboardType, lengthOuter, widthOuter, heightOuter, dimensionalWeight)
        // $.post(
        //     "/cardboard/add-cardboard",
        //     {
        //         companySize: companySize,
        //         shippingSize: shippingSize,
        //         cardboardNo: cardboardNo,
        //         cardboardType: cardboardType,
        //         lengthOuter: lengthOuter,
        //         widthOuter: widthOuter,
        //         heightOuter: heightOuter,
        //         dimensionalWeight: dimensionalWeight,
        //         remark: remark
        //     },
        //     (resp) => {
        //         console.log(resp.data)
        //         try{
        //             if(resp.data == "created new border") {
                        
        //             }
        //         }
        //         catch {
        
        //         }
        //     }
        // )
        })
    }
})
