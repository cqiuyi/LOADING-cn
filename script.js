var tips_array = [
    "你可以通过持枪时与玩家互动来没收其装备。<br><br>手榴弹可用于破坏门。<br><br>右键点击手榴弹可以用它的投掷距离变得垃圾。<br><br>SCP-500不仅能治疗你，还能消除大多数负面效果，并提供后续的再生效果。",
    "科学家和D级人员必须到达地表才能跑路。<br><br>逃脱的D级人员会加入混沌，跑路的科学家会成为九尾狐中至少有雷的杂鱼。<br><br>九尾狐和混沌会在地表区域的两端出现。",
    "阿尔法核弹在引爆时会杀死除了核弹室,地表,49家的生物。它可以从地表区域激活。<br><br>阿尔法核弹的引爆程序可以从重收的核弹室取消。",
    "随便乱调武器上的配件以增大你的死亡概率。<br><br>武器上的配件越多，重量越大，最后会让你变成老寒腿。<br><br>消音器不仅能减弱枪声，还能减少枪口火焰。<br><br>较长且较重的武器在奔跑时射击会降低准确性。",
    "微型H.I.D.可以快速杀死大多数SCP，但能量有限，所以不要拿他电空气<br><br>微型H.I.D.需要约5秒的充能时间才能发射。<br><br>按住右键可以使微型H.I.D.保持在准备发射状态，但会缓慢消耗能量。<br><br>微型H.I.D.在充能时非常吵闹，确保在目标冲向你的时候使用<br><br>充能时发出的响声会吸引来scp打死你",
    "设施内有5个主要区域：城市化轻收、重收、办公,地表和老头妙妙屋。<br><br>办公有两扇通往地表的大门，需要钥匙卡才能打开。<br><br>办公的广播室可用于向所有玩家炸麦。<br><br>轻收将在15分钟后封锁，留在该区域的人会被毒死。",
    "SCP-914会吞掉你的卡。<br><br>SCP-914可以为微型H.I.D.充电。",
    "SCP-079一开始相对较弱，但随着比赛进行会变得更强大。<br><br>SCP-079可以锁门、关灯、过载特斯拉门、扫描区域、与A.C.E.S.互动以及使用地表区域的炮塔。<br><br>SCP-079无法关闭门已损坏的房间的灯光。<br><br>SCP-079可以通过重收容区的电板重新收容。<br><br>被SCP-079使用的摄像头会发出蓝光，你永远不知道它是否在视奸你。",
    "SCP-173可以在黑暗的房间中自由移动，即使被注视也是如此（你都看不见了，还注视他）。带上最没有存在感的手电筒。<br><br>SCP-173可以从背后偷袭你的脖子。",
    "SCP-106对子弹有抗性，但对爆炸物和电击没有。<br><br>SCP-106可以通过其老头家中的股骨破碎器让老头回家。<br><br>SCP-106可以穿门而过。",
    "SCP-096在刚平静下来时最为脆弱。<br><br>SCP-096在暴怒时会变成大运，破坏79的门并杀死目标。<br><br>SCP-096在暴怒时会把79的门全拆了。",
    "SCP-939可以无限冲刺，并且在行走时完全无声。",
    "SCP-049可以瞬间杀死任何靠近的人类。<br><br>SCP-049只能复活还没刷新的人。<br><br>SCP-049-2对爆头攻击很脆弱。<br><br>SCP-049-2是优秀的炮灰，数量众多时非常危险。"
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
    img_index = 0;

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

