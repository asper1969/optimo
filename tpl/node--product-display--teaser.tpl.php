<?php

//kpr($content);
?>

<div class="node-product-display node-teaser">
    <div class="group__header group">
        <?php echo render($content['product:field_novinki']);?>
        <?php echo render($content['product:field_recomendation']);?>
        <?php echo render($content['product:field_hit']);?>
        <?php echo render($content['product:field_discount']);?>
    </div>
    <div class="group group__img">
        <?php echo render($content['field_product_images'][0]);?>
    </div>
    <div class="group group__content">
        <?php echo render($content['title_field']);?>
        <div class="text"><?php echo render($content['field_product_des']);?></div>
        <div class="comments">Отзывы <span>(<?php echo $comment_count;?>)</span></div>
    </div>
    <div class="cart__footer">
        <div class="group__cart group">
            <div class="prices">
                <div class="price__old">
                    <?php echo render($content['product:field_shop_price']);?>
                </div>
                <div class="price__new">
                    <?php echo render($content['product:commerce_price']);?>
                </div>
            </div>
            <?php echo render($content['field_product']);?>
        </div>
        <div class="group__extra group">
            <div class="compare">
                <?php echo render($content['commerce_product_comparison']);?>
            </div>
            <div class="credit">
                <div class="btn">В кредит</div>
                <ul class="pop-up">
                    <li><a href="#">Kaspi.kz</a></li>
                    <li><a href="#">HomeCredit</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
