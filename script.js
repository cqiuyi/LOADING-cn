var tips_array = [
    "你可以通过持枪时与玩家互动来解除其武装。<br><br>手榴弹可用于破坏门。<br><br>右键点击可以减小手榴弹的投掷力度。<br><br>SCP-500不仅能治疗你，还能消除大多数负面效果，并提供后续的再生效果。",
    "科学家和D级人员必须到达地表才能逃脱。<br><br>逃脱的D级人员会加入混沌分裂者，而逃脱的科学家会成为机动特遣队成员。<br><br>机动特遣队和混沌分裂者会在地表区域的两端出现。",
    "阿尔法核弹在引爆时会杀死设施内的所有生物。它可以从地表区域激活。<br><br>阿尔法核弹的引爆序列可以从重收容区的核弹室取消。",
    "根据实际情况调整武器配件以最大化你的优势。<br><br>武器上的配件越多，重量越大，这会影响耐力消耗和移动速度。<br><br>消音器不仅能减弱枪声，还能隐藏枪口火焰。<br><br>较长且较重的武器在奔跑时射击会降低准确性。",
    "微型H.I.D.可以快速杀死大多数SCP，但能量有限，请谨慎使用！<br><br>微型H.I.D.需要约5秒的充能时间才能发射。<br><br>按住右键可以使微型H.I.D.保持在准备发射状态，但会缓慢消耗能量。<br><br>微型H.I.D.在充能时非常吵闹，确保在目标无法逃跑时使用。<br><br>充能时发出的威慑性声音足以打乱敌人的计划。",
    "设施内有四个主要区域：轻收容区、重收容区、办公区和地表区。<br><br>办公区有两扇通往地表的大门，需要钥匙卡才能打开。<br><br>办公区的对讲室可用于向所有玩家广播语音消息。<br><br>轻收容区将在15分钟后封锁，留在该区域的人会被杀死，尽快逃离！",
    "SCP-914可以改变所有物品，包括武器和弹药。<br><br>SCP-914可以为无线电和微型H.I.D.充电。",
    "SCP-079一开始相对较弱，但随着比赛进行会变得更强大。<br><br>SCP-079可以锁门、关灯、过载特斯拉门、扫描区域、与A.C.E.S.互动以及使用地表区域的炮塔。<br><br>SCP-079无法关闭门已损坏的房间的灯光。<br><br>SCP-079可以通过重收容区的发电机重新收容。<br><br>被SCP-079使用的摄像头会发出蓝光，你永远不知道它是否在监视你。",
    "SCP-173可以在黑暗的房间中自由移动，即使被注视也是如此。带上手电筒！<br><br>SCP-173可以从背后悄无声息地杀死目标。",
    "SCP-106对子弹有抗性，但对爆炸物和电击没有。<br><br>SCP-106可以通过其收容室中的股骨破碎器快速重新收容。<br><br>SCP-106可以穿门而过。",
    "SCP-096在刚平静下来时最为脆弱。<br><br>SCP-096在暴怒时可以向前冲锋，破坏门并杀死目标。<br><br>SCP-096在暴怒时会破坏门并撬开关闭的门。",
    "SCP-939可以无限冲刺，并且在行走时完全无声。",
    "SCP-049可以瞬间杀死任何靠近的人类。<br><br>SCP-049只能复活新鲜的尸体。<br><br>SCP-049-2对爆头攻击很脆弱。<br><br>SCP-049-2是优秀的侦察兵，数量众多时非常危险。"
],
    tips_headers = [
        "物品",
        "游戏",
        "阿尔法核弹",
        "武器",
        "微型H.I.D",
        "区域",
        "SCP-914",
        "SCP-079",
        "SCP-173",
        "SCP-106",
        "SCP-096",
        "SCP-939",
        "SCP-049/049-2"
    ],
    tip_index = 0,
    tip_interval = 10000,
    img_index = 0,
    img_interval = 8000;

// 强制全屏（尝试）
function forceFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) elem.requestFullscreen().catch(err => console.log(err));
    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
    else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
}

window.onload = function () {
    // 加载时尝试强制全屏
    forceFullscreen();
    
    // 点击时切换提示 + 再次尝试全屏（绕过浏览器限制）
    document.onclick = function() {
        tip_index = (tip_index + 1) % tips_array.length;
        document.getElementById('hintText').innerHTML = tips_array[tip_index];
        document.getElementById('hintHeader').innerHTML = tips_headers[tip_index];
        forceFullscreen(); // 每次点击都尝试全屏
    };
    
    // 初始加载随机提示
    tip_index = Math.floor(Math.random() * tips_array.length);
    document.getElementById('hintText').innerHTML = tips_array[tip_index];
    document.getElementById('hintHeader').innerHTML = tips_headers[tip_index];
    
    // 背景切换（每8秒）
    function changeBg() {
        img_index = (img_index % 10) + 1;
        document.getElementById('background').style.backgroundImage = `url('${img_index}.png')`;
        setTimeout(changeBg, 8000);
    }
    changeBg();
};
