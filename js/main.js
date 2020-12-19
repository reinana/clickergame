function displayNone(ele){
    ele.classList.remove("d-block");
    ele.classList.add("d-none");
}

function displayBlock(ele){
    ele.classList.remove("d-none");
    ele.classList.add("d-block");
}

const config = {
    startPage: document.getElementById("start-page"),
    loginPage: document.getElementById("login-page"),
    mainPage: document.getElementById("main-page"),
    sidePage: document.getElementById("side-page"),
    target: document.getElementById("target"),    
}

class UserAccount{
    constructor(userName, age, password, totalAsset, burgercount, days, purchases){
        this.userName = userName;
        this.age = age;
        this.password = password;
        this.totalAsset = totalAsset;
        this.burgercount = burgercount;
        this.days = days;
        // this.purchases = purchases;
        this.purchases = {
            "flipmachine":1,
            "lemonadeStand":0,
            "icecreamTruck":0,
            "house":0,
            "townHouse":0,
            "mansion":0,
            "industrialSpace":0,
            "hotelSkyscraper":0,
            "bulletSpeedSkyRailway":0,
            "etfstock":0,
            "etfbonds":0,

        }       
    }
    
}

//不動産クラス
class Property{
    constructor(id, propertyImg, propertyName, price, income, maxPurchase){
        this.id = id;
        this.propertyImg = propertyImg;
        this.propertyName = propertyName;
        this.price = price;
        this.income = income;
        this.maxPurchase = maxPurchase;
    }
}
let flipmachine = new Property("flipmachine", "img/grill-4308709_640.png", "Flip machine", 1.5, 25, 500);
let house = new Property("house", "img/home-1294564_640.png", "House", 2000, 3200, 100);
let lemonadeStand = new Property("lemonadeStand","img/juice-35236_640.png", "Lemonade Stand", 3, 30, 1000);
let icecreamTruck = new Property("icecreamTruck","img/ice-cream-308972_640.png", "Ice Cream Truck", 100, 120, 500);
let townHouse = new Property("townHouse","img/house-3562064_640.png", "Town House", 2000, 32000,100);
let mansion = new Property("mansion","img/condominium-2903520_640.png", "Mansion" ,25000, 500000, 20);
let industrialSpace = new Property("industrialSpace","img/factory-48781_640.png", "Industrial Space", 100000, 2200000, 10);
let hotelSkyscraper = new Property("hotelSkyscraper","img/buildings-304004_640.png", "HotelSkyscraper" , 1000000, 25000000, 5);
let bulletSpeedSkyRailway = new Property("bulletSpeedSkyRailway","img/train-157027_640.png", "Bullet-Speed Sky Railway" , 10000000, 30000000000, 1);

let incomes = [flipmachine, lemonadeStand, icecreamTruck, house, townHouse, mansion, industrialSpace, hotelSkyscraper,bulletSpeedSkyRailway];

//投資クラス
class Investment{
    constructor(id, propertyImg, propertyName, price, income){
        this.id = id;
        this.propertyImg = propertyImg;
        this.propertyName = propertyName;
        this.price = price;
        this.income = income;        
    }
}
let etfstock = new Investment("etfstock", "img/chart-1296049_640.png", "ETF Stock", 30, 0.1, Infinity);
let etfbonds = new Investment("etfbonds", "img/chart-1296049_640.png", "ETF Bonds", 30, 0.07, Infinity);

let etfs = [etfstock, etfbonds];

config.startPage.append(startPage());
//スタートページ
function startPage(){
    let container = document.createElement("div");
    container.classList.add("d-flex");
    container.innerHTML =
    `
        <img src="img/city-3041803_640.jpg" class="">
        <div id="title" class="title">
            <h1>Clicker Enpire Game</h1>
        </div>
        <div id="startbtn" class="start-btn">
            <button type="button" class="btn btn-lg btn-primary ">Game Start</button>        
        </div>
        <div id="login-page" class="loginform bg-white text-center">
        </div>  
    `
    return container;
}
//ログインページを作る関数
function loginform(){
    
    let container = document.createElement("div");
    container.classList.add("bg-white", "col-12", "text-center", "p-4");
    container.innerHTML = 
    `
        <h2 class="pb-3">ログイン</h2>
            <form id="game-form" class="form" onsubmit="initializeUserAccount(); event.preventDefault()">
                
                <div class="form-group">
                    <input type="text" name="userName" class="form-control" placeholder="ユーザーネーム" value="" required>
                </div>
                <div class="form-group">
                    <input type="number" name="age" class="form-control" name="userAge" placeholder="年齢" value="" required>
                </div>
                
                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="logintype" id="newgame" value="NewGame" checked required>
                        <label class="form-check-label" for="newgame">
                            NewGame
                        </label>
                    </div>
                    <div id="login" class="form-check">
                        <input class="form-check-input" type="radio" name="logintype" id="login" value="checkings" required>
                        <label class="form-check-label" for="login">
                            Login
                        </label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary col-12">Start</button>
            </form>
    `
    

    return container;
}
//ユーザーアカウントを作る
//最初の年齢を記録　リセットボタンのため
let initialAge = 0;
function initializeUserAccount(){
    const form = document.getElementById("game-form");
    let userAccount = new UserAccount(
        form.querySelectorAll(`input[name="userName"]`).item(0).value,
        parseInt(form.querySelectorAll(`input[name="age"]`).item(0).value),
        "aaa",
        50000,
        0,
        0,        
    );
    
    initialAge = parseInt(form.querySelectorAll(`input[name="age"]`).item(0).value);
    // displayNone(config.startPage);
    // displayNone(config.loginPage);
    config.startPage.innerHTML = "";
    config.mainPage.append(mainPage(userAccount));

}

//mainpageを作る関数
function mainPage(UserAccount){
    
    let container = document.createElement("div");
    container.classList.add("container", "d-flex", "justify-content-center", "row", "col-11", "col-md-8");
    container.innerHTML =
        `
            <div class="left col-5 text-white d-flex flex-column bg-blue ">
                <div class="countBurger d-flex flex-column justify-content-center">
                    <div class="burgers py-2">
                        <h5 class="burgercount">${UserAccount.burgercount} Burgers</h5>
                        <p>1クリック${25*UserAccount.purchases.flipmachine}円</p>
                    </div>
                    <div class="pt-5">
                        <img src="img/cheeseburger-34315_640.png" class="burgerclick burgerimg py-2 hover" id="burgerclick">
                    </div>  
                    <p class="get25 small py-2 d-none" id="get25">${25*UserAccount.purchases.flipmachine}円Get!!</p>
                </div>
            </div>
            <div class="right col-7 d-flex flex-column pr-0">
                <div class="userInfo d-flex flex-wrap justify-content-center bg-blue">
                    <div class="box">${UserAccount.userName}</div>
                    <div class="box age">${UserAccount.age}歳</div>
                    <div class="box days">${UserAccount.days}日</div>
                    <div class="box total-asset">${UserAccount.totalAsset}円</div>

                </div>
                <div class="p-1"> </div>
                <div class="asset bg-blue p-2">
                </div>
                <div class="save">
                    <div class="saveicon d-flex justify-content-end pt-3">
                        <i id="reset" class="icon fas fa-redo-alt fa-2x text-white mr-2"></i>
                        <i id="save" class="icon fas fa-save fa-2x text-white"></i>
                    </div>
                </div>
            </div>
    `

    //不動産のカードを作る
    let propertyCards = document.createElement("div");

    for(let i=0;i<incomes.length;i++){
        propertyCards.innerHTML +=
        `
        <div class="propertyCard ${incomes[i].id} d-flex row mx-1 py-1 my-1">  
            <img src="${incomes[i].propertyImg}" class="propertyImg">
            <div class="investInfo d-flex flex-column  pt-2 col-md-8 col-10">
                <div>
                    <h5 class="text-left text-white ">${incomes[i].propertyName}</h5>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="d-flex">
                        <p class="price text-white text-left small">${incomes[i].price}</p>
                        <p class="text-white text-left small">万円</p>
                    </div>
                    <div class="d-flex">
                        <p class="perday text-success small ml-2">${incomes[i].income}</p>
                        <p class="text-success small">円／day</p>
                    </div>

                </div>
            </div>
            <div class="count d-flex text-white align-items-center col-md-1 col-2">
                <p class="item" id="${incomes[i].id}">0</p>
            </div>
        </div>    
        `
    }

    //投資のカードを作る
    let investmentCards = document.createElement("div");

    for(let i=0;i<etfs.length;i++){
        investmentCards.innerHTML +=
        `
        <div class="investmentCard ${etfs[i].id} d-flex row mx-1 py-1 my-1">  
            <img src="${etfs[i].propertyImg}" class="propertyImg">
            <div class="investInfo d-flex flex-column  pt-2 col-md-8 col-10">
                <div>
                    <h5 class="text-left text-white ">${etfs[i].propertyName}</h5>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="d-flex">
                        <p class="price text-white text-left small">${etfs[i].price}</p>
                        <p class="text-white text-left small">万円</p>
                    </div>
                    <div class="d-flex">
                        <p class="perday text-success small ml-2">${etfs[i].income}</p>
                        <p class="text-success small">%／day</p>
                    </div>

                </div>
            </div>
            <div class="count d-flex text-white align-items-center col-md-1 col-2">
                <p class="item" id="${etfs[i].id}">0</p>
            </div>
        </div>    
        `
    }
    let assetcontainer = container.querySelectorAll(".asset").item(0);
    assetcontainer.append(investmentCards, propertyCards);
    
    

    // バーガークリックで25円Get
    let burgerClick = container.querySelectorAll(".burgerclick").item(0);
    let get25 = container.querySelectorAll(".get25").item(0);
    let totalmoney = container.querySelectorAll(".total-asset").item(0);
    let burgercount = container.querySelectorAll(".burgercount").item(0);
    let flipcount = container.querySelectorAll("#flipmachine").item(0);

    burgerClick.addEventListener("click",function(){
        UserAccount.totalAsset += 25 * parseInt(flipcount.innerHTML);
        UserAccount.burgercount +=1 * parseInt(flipcount.innerHTML);
        totalmoney.innerHTML = `${UserAccount.totalAsset}円`;
        burgercount.innerHTML = `${UserAccount.burgercount} Burgers`;
        
        displayBlock(get25);
        setTimeout(function(){
            displayNone(get25);
        },500)
    
    });

// ********ページが切り替わると1日プラスされてしまう？？？************************

    //日にちがふえる　365日たったら1歳増える　1日の収益を足す
    let countDay = container.querySelectorAll(".days").item(0);
    let countAge = container.querySelectorAll(".age").item(0);
    setInterval(function(){
        
        UserAccount.totalAsset += Math.ceil(getmoney1day(UserAccount));
        totalmoney.innerHTML = `${UserAccount.totalAsset}円`;
        UserAccount.days +=1;
        countDay.innerHTML = `${UserAccount.days}日`;
        if(UserAccount.days%365==0){
            UserAccount.age +=1;
            countAge.innerHTML = `${UserAccount.age}歳`;
        } 
    },1000);


    //item購入ページへ　イベントリスナー
    //不動産のカードをクリックしたとき
    let itemClick = container.querySelectorAll(".propertyCard");
    for(let i=0; i<itemClick.length;i++){
        itemClick[i].addEventListener("click", function(){
                
            let getid = itemClick[i].querySelectorAll(".item")[0];
            assetcontainer.innerHTML = "";
                
            assetcontainer.append(purchaseItems(UserAccount, getid));
            //戻るボタンを押したらmainPage

            let backbtn = container.querySelectorAll(".back-btn")[0];
            backbtn.addEventListener("click", function(){

                assetcontainer.innerHTML="";
                assetcontainer.append(investmentCards, propertyCards);
            });

            //totalを変更する
            
            let totaltext = assetcontainer.querySelectorAll(".totaltext")[0];
            let getID = getPropetyID(getid.id);

            assetcontainer.querySelectorAll(`input[name="itempurchasecount"]`)[0].addEventListener("change", function(){
            let itempurchasecount = parseInt(assetcontainer.querySelectorAll(`input[name="itempurchasecount"]`)[0].value);
                totaltext.innerHTML=`Total : ${itempurchasecount * 10000 * getID.price} 円`;
                
            });
                
            //購入するを押したら持ち物に+

            
            let confirm = assetcontainer.querySelectorAll(".confirm-btn")[0];
            confirm.addEventListener("click", function(){
                
                let itempurchasecount = parseInt(assetcontainer.querySelectorAll(`input[name="itempurchasecount"]`)[0].value);
                
                
                itempurchaseEvent(UserAccount, getid, itempurchasecount)
                assetcontainer.innerHTML="";
                assetcontainer.append(investmentCards, propertyCards);
                
                //持っているitemの数　hardcodeになっちゃうけど、どうにもできず
                container.querySelectorAll("#flipmachine")[0].innerHTML = UserAccount.purchases.flipmachine;
                container.querySelectorAll("#house")[0].innerHTML = UserAccount.purchases.house;
                container.querySelectorAll("#townHouse")[0].innerHTML = UserAccount.purchases.townHouse;
                container.querySelectorAll("#mansion")[0].innerHTML = UserAccount.purchases.mansion;
                container.querySelectorAll("#industrialSpace")[0].innerHTML = UserAccount.purchases.industrialSpace;
                container.querySelectorAll("#hotelSkyscraper")[0].innerHTML = UserAccount.purchases.hotelSkyscraper;
                container.querySelectorAll("#bulletSpeedSkyRailway")[0].innerHTML = UserAccount.purchases.bulletSpeedSkyRailway;
                container.querySelectorAll("#lemonadestand")[0].innerHTML = UserAccount.purchases.lemonadeStand;
                container.querySelectorAll("#icecreamTruck")[0].innerHTML = UserAccount.purchases.icecreamTruck;
                //flipmachinだけincomeの値段かえる
                let flipincome = propertyCards.querySelectorAll(".flipmachine")[0];

                let flipincomein = flipincome.querySelectorAll(".perday")[0];
                flipmachine.income= UserAccount.purchases.flipmachine * 25;
                flipincomein.innerHTML = flipmachine.income;
                container.querySelectorAll(".burgers p")[0].innerHTML = `1クリック　${flipmachine.income}円`
                let get25 = container.querySelectorAll(".get25").item(0);
                get25.innerHTML = `${flipmachine.income}円Get!!`
            });    
        });
    }

    
    //投資のカードをクリックしたとき
    let investClick = container.querySelectorAll(".investmentCard");
    for(let i=0; i<investClick.length; i++){
        investClick[i].addEventListener("click", function(){
            
            let getid = investClick[i].querySelectorAll(".item")[0];
            assetcontainer.innerHTML = "";
                
            assetcontainer.append(purchaseItems(UserAccount, getid));
            //戻るボタンを押したらmainPage

            let backbtn = container.querySelectorAll(".back-btn")[0];
            backbtn.addEventListener("click", function(){

                assetcontainer.innerHTML="";
                assetcontainer.append(investmentCards, propertyCards);
            });
            //totalを変更する
            
            let totaltext = assetcontainer.querySelectorAll(".totaltext")[0];
            let getID = getPropetyID(getid.id);

            assetcontainer.querySelectorAll(`input[name="itempurchasecount"]`)[0].addEventListener("change", function(){
            let itempurchasecount = parseInt(assetcontainer.querySelectorAll(`input[name="itempurchasecount"]`)[0].value);
                totaltext.innerHTML=`Total : ${itempurchasecount * 10000 * getID.price} 円`;
                
            });

            //購入ボタン
            let confirm = assetcontainer.querySelectorAll(".confirm-btn")[0];
            confirm.addEventListener("click", function(){
                
                let itempurchasecount = parseInt(assetcontainer.querySelectorAll(`input[name="itempurchasecount"]`)[0].value);
                
                itempurchaseEvent(UserAccount, getid, itempurchasecount)
                assetcontainer.innerHTML="";
                assetcontainer.append(investmentCards, propertyCards);
    
                //持っているitemの数　hardcodeになっちゃうけど、どうにもできず
                container.querySelectorAll("#etfstock")[0].innerHTML = UserAccount.purchases.etfstock;
                container.querySelectorAll("#etfbonds")[0].innerHTML = UserAccount.purchases.etfbonds;

                //etfstockだけpriceの値段かえる
                let etfstockprice = investmentCards.querySelectorAll(".etfstock")[0];

                let etfstockin = etfstockprice.querySelectorAll(".price")[0];
                etfstockin.innerHTML = etfstock.price;

            });    
        });
    }
    

    



    //セーブボタンクリック　mainpageのデータを　jsonで保存
    let saveClick = container.querySelectorAll("#save").item(0);
    saveClick.addEventListener("click", function(){

        config.mainPage.innerHTML="";
        displayNone(config.mainPage);

        config.sidePage.append(savePage(UserAccount));
        config.sidePage.querySelectorAll(".saveback")[0].addEventListener("click",function(){
            config.sidePage.innerHTML="";
            config.startPage.innerHTML="";

            config.startPage.append(startPage());

            let startbtn = document.getElementById("startbtn");
            let title = document.getElementById("title");
            startbtn.addEventListener("click", function(){
                displayNone(startbtn)
                displayNone(title);
                config.startPage.querySelectorAll("#login-page")[0].append(loginform());

                let login = document.getElementById("login");
                login.addEventListener("click", function(){
                    let userJsonString = prompt("復活の呪文を入力してください");
                    let data = JSON.parse(userJsonString);
                    
                    // let userAccount = new UserAccount();

                    UserAccount.userName = data.userName;
                    UserAccount.age = data.age;
                    UserAccount.password = data.password;
                    UserAccount.totalAsset = data.totalAsset;
                    UserAccount.burgercount = data.burgercount;
                    UserAccount.days = data.days;
                    UserAccount.purchases = {
                        "flipmachine":data.purchases.flipmachine,
                        "lemonadeStand":data.purchases.lemonadeStand,
                        "icecreamTruck":data.purchases.icecreamTruck,
                        "house":data.purchases.house,
                        "townHouse":data.purchases.townHouse,
                        "mansion":data.purchases.mansion,
                        "industrialSpace":data.purchases.industrialSpace,
                        "hotelSkyscraper":data.purchases.hotelSkyscraper,
                        "bulletSpeedSkyRailway":data.purchases.bulletSpeedSkyRailway,
                        "etfstock":data.purchases.etfstock,
                        "etfbonds":data.purchases.etfbonds,

                    }       

                    config.startPage.classList.add("d-none");

                    config.startPage.innerHTML = "";
                    config.mainPage.innerHTML = "";
                    config.mainPage.append(mainPage(UserAccount));

                })

            });
        })
        
    // *********最初のページに戻るとボタンが押せない？？？**********

    });

    //リセットボタンクリック
    let reset = container.querySelectorAll("#reset").item(0);
    reset.addEventListener("click", function(){
        UserAccount.age = initialAge;
        
        UserAccount.totalAsset = 50000;
        UserAccount.days = 0;
        UserAccount.burgercount = 0;
        UserAccount.purchases = {
            "flipmachine":1,
            "lemonadeStand":0,
            "icecreamTruck":0,
            "house":0,
            "townHouse":0,
            "mansion":0,
            "industrialSpace":0,
            "hotelSkyscraper":0,
            "bulletSpeedSkyRailway":0,
            "etfstock":0,
            "etfbonds":0,
        }
    assetcontainer.innerHTML="";
    assetcontainer.append(investmentCards, propertyCards);
    // ハードコード　要改良

        assetcontainer.querySelectorAll("#flipmachine")[0].innerHTML = UserAccount.purchases.flipmachine;
        assetcontainer.querySelectorAll("#house")[0].innerHTML = UserAccount.purchases.house;
        assetcontainer.querySelectorAll("#townHouse")[0].innerHTML = UserAccount.purchases.townHouse;
        assetcontainer.querySelectorAll("#mansion")[0].innerHTML = UserAccount.purchases.mansion;
        assetcontainer.querySelectorAll("#industrialSpace")[0].innerHTML = UserAccount.purchases.industrialSpace;
        assetcontainer.querySelectorAll("#hotelSkyscraper")[0].innerHTML = UserAccount.purchases.hotelSkyscraper;
        assetcontainer.querySelectorAll("#bulletSpeedSkyRailway")[0].innerHTML = UserAccount.purchases.bulletSpeedSkyRailway;
        assetcontainer.querySelectorAll("#lemonadestand")[0].innerHTML = UserAccount.purchases.lemonadeStand;
        assetcontainer.querySelectorAll("#icecreamTruck")[0].innerHTML = UserAccount.purchases.icecreamTruck;
        assetcontainer.querySelectorAll("#etfstock")[0].innerHTML = UserAccount.purchases.etfstock;
        assetcontainer.querySelectorAll("#etfbonds")[0].innerHTML = UserAccount.purchases.etfbonds;
        burgercount.innerHTML = `${UserAccount.burgercount} Burgers`;
        let flipincome = propertyCards.querySelectorAll(".flipmachine")[0];
        let flipincomein = flipincome.querySelectorAll(".perday")[0];
        flipmachine.income= 25;
        flipincomein.innerHTML = flipmachine.income;
        
        container.querySelectorAll(".burgers p")[0].innerHTML = `1クリック　${flipmachine.income}円`
        let get25 = container.querySelectorAll(".get25").item(0);
        get25.innerHTML = `${flipmachine.income}円Get!!`
        
        

        container.querySelectorAll(".age")[0].innerHTML = `${UserAccount.age}歳`;
        etfstock.price = 30;
        //etfstockだけpriceの値段かえる
        let etfstockprice = investmentCards.querySelectorAll(".etfstock")[0];

        let etfstockin = etfstockprice.querySelectorAll(".price")[0];
        etfstockin.innerHTML = etfstock.price;


    });
    

    //持っているitemの数　hardcodeになっちゃうけど、どうにもできず
    assetcontainer.querySelectorAll("#flipmachine")[0].innerHTML = UserAccount.purchases.flipmachine;
    assetcontainer.querySelectorAll("#house")[0].innerHTML = UserAccount.purchases.house;
    assetcontainer.querySelectorAll("#townHouse")[0].innerHTML = UserAccount.purchases.townHouse;
    assetcontainer.querySelectorAll("#mansion")[0].innerHTML = UserAccount.purchases.mansion;
    assetcontainer.querySelectorAll("#industrialSpace")[0].innerHTML = UserAccount.purchases.industrialSpace;
    assetcontainer.querySelectorAll("#hotelSkyscraper")[0].innerHTML = UserAccount.purchases.hotelSkyscraper;
    assetcontainer.querySelectorAll("#bulletSpeedSkyRailway")[0].innerHTML = UserAccount.purchases.bulletSpeedSkyRailway;
    assetcontainer.querySelectorAll("#lemonadestand")[0].innerHTML = UserAccount.purchases.lemonadeStand;
    assetcontainer.querySelectorAll("#icecreamTruck")[0].innerHTML = UserAccount.purchases.icecreamTruck;
    assetcontainer.querySelectorAll("#etfstock")[0].innerHTML = UserAccount.purchases.etfstock;
    assetcontainer.querySelectorAll("#etfbonds")[0].innerHTML = UserAccount.purchases.etfbonds;

    return container;
}


function getmoney1day(UserAccount){
        let total1day = 0;        
        total1day+= etfbonds.income * UserAccount.purchases.etfbonds * etfbonds.price *100;
        total1day+= etfstock.income * UserAccount.purchases.etfstock *etfstock.price *100;
        total1day+= lemonadeStand.income*UserAccount.purchases.lemonadeStand;
        total1day+= icecreamTruck.income * UserAccount.purchases.icecreamTruck;
        total1day+= house.income * UserAccount.purchases.house;
        total1day+= townHouse.income * UserAccount.purchases.townHouse;
        total1day+= mansion.income * UserAccount.purchases.mansion;
        total1day+= industrialSpace.income * UserAccount.purchases.industrialSpace;
        total1day+= bulletSpeedSkyRailway.income * UserAccount.purchases.bulletSpeedSkyRailway;    
        return total1day;
}


//item購入ページ

function getPropetyID(itemId){
    switch(itemId){
        case "flipmachine":
            return flipmachine;        
        case "lemonadeStand":
            return lemonadeStand;            
        case "icecreamTruck":
            return icecreamTruck;       
        case "house":
            return house;        
        case "townHouse":
            return townHouse;
        case "mansion":
            return mansion;       
        case "industrialSpace":
            return industrialSpace;         
        case "hotelSkyscraper":
            return hotelSkyscraper;
        case "bulletSpeedSkyRailway":
            return bulletSpeedSkyRailway;
        case "etfstock":
            return etfstock;       
        case "etfbonds":
            return etfbonds;
        default:  
        
    }    
    
}
////購入ページ差込

    
function purchaseItems(UserAccount, itemId){
    let getID = getPropetyID(itemId.id);

    let purchaseContainer = document.createElement("div");
    purchaseContainer.classList.add("purchaseContainer", "d-flex","p-3","flex-column","bg-grey");
    
    purchaseContainer.innerHTML = 
    `
        <div class="top d-flex mb-2">
            <div class="left text-white text-left m-0 col-8">
                <h5>${getID.propertyName}</h5>
                <p id="limitetf">Max Purchases: ${getID.maxPurchase}</p>
                <p>Price : ${getID.price} 万円</p>
                <p>Get: ${getID.income} extra yen per second</p>
            </div>
            <div class="right col-4">
                <img src="${getID.propertyImg}" class="w-80 purchaseImg">
            </div>
        </div>
        <div class="middle d-flex flex-column mt-2">
            <div class="form-group d-flex flex-column col-12">
                <label for="itempurchasecount" class="text-white text-left">How Many would you like to purchase?</label>
            <div class="">
                <input type="number" class="form-control form-control-sm text-right " name="itempurchasecount" id="itempurchasecount" placeholder="0" value="0" max="${getID.maxPurchase}">
            </div>
            <div>
                <p class="totaltext text-right text-white m-0">Total : 0</p>
            </div>
        </div>
        <div class="d-flex justify-content-between col-12">
            <div class="col-6 pl-0">
                <button class="btn btn-light col-12 back-btn">戻る</button>
            </div>
            <div class="col-6 pr-0">
                <button class="btn btn-primary col-12 confirm-btn">購入する</button>
            </div>
        </div>


            
    `
    //etfは限度なしなので限度数をd-none

    let limitetf = purchaseContainer.querySelectorAll("#limitetf")[0];
    if(itemId.id == "etfstock" || itemId.id == "etfbonds"){
        limitetf.classList.add("d-none");
    }
    return purchaseContainer;
}

function itempurchaseEvent(UserAccount, itemId, itempurchasecount){
    let getID = getPropetyID(itemId.id);
    
    if(itempurchasecount <=0 || itempurchasecount > getID.maxPurchase){
        alert("正しい数字を入力してください");
    }
    else if(UserAccount.totalAsset < getID.price*10000 * itempurchasecount){
        alert("お金が足りません");
    }
    else{
        if(getID.id=="flipmachine"){
            UserAccount.purchases.flipmachine += itempurchasecount;
            UserAccount.totalAsset -= flipmachine.price*10000*itempurchasecount;
        }
        else if(getID.id=="lemonadeStand"){
            UserAccount.purchases.lemonadeStand += itempurchasecount;
            UserAccount.totalAsset -= lemonadeStand.price*10000*itempurchasecount;
        }
        else if(getID.id=="icecreamTruck"){
            UserAccount.purchases.icecreamTruck += itempurchasecount;
            UserAccount.totalAsset -= icecreamTruck.price*10000*itempurchasecount;
        }
        else if(getID.id=="house"){
            UserAccount.purchases.house += itempurchasecount;
            UserAccount.totalAsset -= house.price*10000*itempurchasecount;           
        }
        else if(getID.id=="townHouse"){
            UserAccount.purchases.townHouse += itempurchasecount;
            UserAccount.totalAsset -= townHouse.price*10000*itempurchasecount;           
        }
        else if(getID.id=="mansion"){
            UserAccount.purchases.mansion += itempurchasecount;
            UserAccount.totalAsset -= mansion.price*10000*itempurchasecount;           
        }
        else if(getID.id=="industrialSpace"){
            UserAccount.purchases.industrialSpace += itempurchasecount;
            UserAccount.totalAsset -= industrialSpace.price*10000*itempurchasecount;           
        }
        else if(getID.id=="hotelSkyscraper"){
            UserAccount.purchases.hotelSkyscraper += itempurchasecount;
            UserAccount.totalAsset -= hotelSkyscraper.price*10000*itempurchasecount;           
        }
        else if(getID.id=="bulletSpeedSkyRailway"){
            UserAccount.purchases.bulletSpeedSkyRailway += itempurchasecount;
            UserAccount.totalAsset -= bulletSpeedSkyRailway.price*10000;           
        }
        else if(getID.id=="etfstock"){
            UserAccount.purchases.etfstock += itempurchasecount;
            UserAccount.totalAsset -= etfstock.price*10000*itempurchasecount;
            etfstock.price *= 1.1; 
            // console.log(Math.floor(etfstock.price*100)/100);
            etfstock.price = (Math.floor(etfstock.price * 100))/100;
        }
        else if(getID.id=="etfbonds"){
            UserAccount.purchases.etfbonds += itempurchasecount;
            UserAccount.totalAsset -= etfbonds.price*10000*itempurchasecount;
        }

    }
}

    
    

function savePage(UserAccount){
    let jsonEncoded = JSON.stringify(UserAccount);
    let container = document.createElement("div");
    container.classList.add("bg-white", "col-6", "text-center", "p-4");
    container.innerHTML = 
    `
        <h2 class="pb-3">ふっかつのじゅもん</h2>
        <div class="spellbox d-flex flex-wrap col-12 h-100">
            <p class="small">${jsonEncoded}</p>
        </div>
        <button type="" class="saveback btn btn-primary col-12">OK</button>    
    `
    

    return container;

}

// スタートボタンでアカウント作る　ラジオボタンでセーブデータ復活
let startbtn = document.getElementById("startbtn");
let title = document.getElementById("title");
startbtn.addEventListener("click", function(){
    displayNone(startbtn)
    displayNone(title);
    config.startPage.querySelectorAll("#login-page")[0].append(loginform());

    let login = document.getElementById("login");
    login.addEventListener("click", function(){
        let userJsonString = prompt("復活の呪文を入力してください");
        let data = JSON.parse(userJsonString);
        
        let userAccount = new UserAccount();

        userAccount.userName = data.userName;
        userAccount.age = data.age;
        userAccount.password = data.password;
        userAccount.totalAsset = data.totalAsset;
        userAccount.burgercount = data.burgercount;
        userAccount.days = data.days;
        userAccount.purchases = {
            "flipmachine":data.purchases.flipmachine,
            "lemonadeStand":data.purchases.lemonadeStand,
            "icecreamTruck":data.purchases.icecreamTruck,
            "house":data.purchases.house,
            "townHouse":data.purchases.townHouse,
            "mansion":data.purchases.mansion,
            "industrialSpace":data.purchases.industrialSpace,
            "hotelSkyscraper":data.purchases.hotelSkyscraper,
            "bulletSpeedSkyRailway":data.purchases.bulletSpeedSkyRailway,
            "etfstock":data.purchases.etfstock,
            "etfbonds":data.purchases.etfbonds,

        }       

        config.startPage.classList.add("d-none");
        // config.loginPage.classList.add("d-none");
        config.startPage.innerHTML = "";
        config.mainPage.innerHTML = "";
        config.mainPage.append(mainPage(userAccount));

    })

});

