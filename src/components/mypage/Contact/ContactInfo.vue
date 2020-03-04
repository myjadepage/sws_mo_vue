<template>
<div class="contact_info_wrap">
    <span class="ico_qa"></span>
    <div class="contact_mainText"><span class="text-color-sws">SWSHOP</span>을 이용하면서<br>불편한 점과 바라는 점을 말씀해 주세요.</div>
    <div class="contact_subText">여러분과 함께 만들어가는 서비스입니다.</div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.contact_info_wrap{
    font-family: "Noto Sans KR";
    margin-top: 10px;
    height: 100px;
    background-color: #F2F2F2;
}

.contact_info_wrap .contact_mainText{
    font-size: 16px;
    padding-top: 15px;
    margin-bottom: 3px;
}
.contact_info_wrap .contact_subText{
    font-size: 13px;
    color: #666666;
}

.ico_qa{
    float: left;
    margin:33px 15px 33px 12px;
    display: inline-block;
    background: url("../../../assets/img/qa@3x.png");
    background-size: 100%;
    width: 53px;
    height: 34px;
}

.text-color-sws{
    color: #e61754;
    font-weight: 500;
}

</style>
