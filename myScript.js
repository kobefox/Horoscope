var signs = ["Capricorn","Aquarius", "Pisces", "Aries", "Taurus", "Gemini","Cancer", "Leo","Virgo", "Libra", "Scorpio", "Sagittarius"];

function daysMonth(){
    var month = document.getElementById("month").value;
    var daysMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    document.getElementById("day").innerHTML = '';
    for (var i = 1; i <= daysMonths[month - 1];i++){
        document.getElementById("day").innerHTML += ("<option value='" + i + "'>" + i + "</option>");
    }
}
function getHoroscope(){
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var name = document.getElementById("Name").value;
    document.getElementById("determineHoroscope").innerHTML = name + ", you are a " + getSign(day, month) + ": " + returnHoroscope(getSign(day, month));
    console.log(day);
    console.log(month);
    console.log(getSign(day, month));
    console.log(name);
    document.getElementById("images").innerHTML = "<img src=images/" + getSign(day,month) + ".jpg/>";

}
function returnHoroscope(sign){
    var index = signs.indexOf(sign);
    message = ["Try as you might, you may spend the better part of the day with your foot in your mouth. It's one of those days when anything you say to clear up the confusion only confuses matters more. You want to spend a fun evening with friends but fear you'll only make matters worse. Your friends love you even on days when your social skills aren't at their peak!",
        "Just because you're stressed now doesn't mean that you need to be stressed tomorrow, or the rest of the day for that matter. There are steps you can take to soothe your troubled soul. Stop, close your eyes, and relax into some deep breaths. You'll be surprised by how refreshing these few moments can be. Why not try it?",
        "Your tendency is to rush headlong into a new project. Not everyone is caught up in your enthusiasm. Be careful not to steamroll over those you care about most. Your partner, especially, feels a bit miffed and left out at the moment. Do what you can to soothe any ruffled feathers. It might be time to set aside your project in favor of a romantic outing.",
        "Out with the old and in with the new! That seems to be your mantra for the day, especially where your home is concerned. Your energy and motivation are high. If anyone can execute a complete one-day redecoration, you can. But even you can get hurt when trying to move a sofa by yourself. Enlist help, but be careful not to work them too hard. Not everyone has your energy!",
        "Don't look a gift horse in the mouth, as the saying goes. You're likely to receive some good news today. Don't second-guess it, or worry if you're worthy of it. Accept it for what it is, though it might be worth taking some time to consider why you feel unworthy in the first place.",
        "Are you one of those people who thinks that your bank account can't be overdrawn as long as you still have checks in your checkbook? As bad as you think your financial situation is, your problems are easily reconciled. It's not that you're spending more money than you have, but that you're not keeping track of what you spend. Better record keeping will help ease your anxiety.",
        "Today is good for relationships. Regardless of whether it's personal or professional, you can expect good things to happen. You may be called upon to participate in an unusual group project and strike up some potentially beautiful friendships. At home your mate may be especially thoughtful and demonstrative. You radiate an aura of love and warmth, and people respond in kind.",
        "You deserve a day off. Why not play hooky from your duties and surround yourself with beautiful works of art? Better yet, try to create some yourself. Admit it, you've been hankering to try a creative endeavor. Why not begin today? Your creativity and intuition are at an all-time high. The combination might produce something of real merit.",
        "You have an exciting, intense day in store. Your curiosity is at a peak, and today it combines with a vivid imagination. This makes you ideally suited for medical research projects, as it gives you the ability to make connections among seemingly disparate themes. Regardless of your profession, you can expect to see the world in an entirely new way today.",
        "It's likely that you've been working too hard and too long. Don't you think the time has come for a bit of a break? Even if you manage to drag yourself out of bed, you're unlikely to accomplish much. When your heart isn't in it, it's difficult for your mind to work. A few days of rest and relaxation will rejuvenate you. Perhaps you should take a short jaunt out of town.",
        "It's time to expand your horizons. No more waiting around for events to change of their own accord. You've grown up enough to realize that if change is going to happen, you have to make it happen. As a result, today is busier than most as you begin to execute all those ideas you've been thinking about.",
        "As much as you want to change your financial situation, don't act rashly. If there are several options to choose from, you're advised to refrain from making any decision until your thoughts have crystallized. If you feel in a hurry to make progress, you can record your options so you have them to review in the light of a clearer day."
    ];
    return message[index];
}
function getSign(day, month){
    var signs = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
    if (month === 1){
        if (day <= 20){
            return signs[0];
        }else{
            return signs[1];
        }
    }
    if (month === 2){
        if (day <= 19){
            return signs[1];
        }else{
            return signs[2];
        }
    }
    if (month === 3){
        if (day <= 20){
            return signs[2];
        }else{
            return signs[3];
        }
    }
    if (month === 4){
        if (day <= 21){
            return signs[3];
        }else{
            return signs[4];
        }
    }
    if (month === 5){
        if (day <= 22){
            return signs[4];
        }else{
            return signs[5];
        }
    }
    if (month === 6){
        if (day <= 22){
            return signs[5];
        }else{
            return signs[6];
        }
    }
    if (month === 7){
        if (day <= 23){
            return signs[6];
        }else{
            return signs[7];
        }
    }
    if (month === 8){
        if (day <= 23){
            return signs[7];
        }else{
            return signs[8];
        }
    }
    if (month === 9){
        if (day <= 23){
            return signs[8];
        }else{
            return signs[9];
        }
    }
    if (month === 10){
        if (day <= 23){
            return signs[9];
        }else{
            return signs[10];
        }
    }
    if (month === 11){
        if (day <= 22){
            return signs[10];
        }else{
            return signs[11];
        }
    }
    if (month === 12){
        if (day <= 22){
            return signs[11];
        }else{
            return signs[0];
        }
    }
}


