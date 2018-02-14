<?php
$content_alter = $content;
unset($content_alter['commerce_product_comparison'],
    $content_alter['links'], $content_alter['comments'],
    $content_alter['title_field'], $content_alter['product:commerce_price'],
    $content_alter['product:field_discount'], $content_alter['field_product'],
    $content_alter['product:field_hit'], $content_alter['product:field_recomendation'],
    $content_alter['product:field_shop_price'], $content_alter['product:sku'],
    $content_alter['field_catalog'], $content_alter['product:field_weight'],
    $content_alter['field_product_des'], $content_alter['product:field_novinki'],
    $content_alter['field_product_images'], $content_alter['product:title_field'],
    $content_alter['field_product_related'], $content_alter['product:status']);
//kpr($content_alter);
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
        <div class="text">
            <?php if($content_alter):?>
                <ul class="attributes">
                    <?php foreach($content_alter as $attribute):?>
                        <li class="attribute">
                        <span class="attribute__title">
                            <?php echo $attribute['#title'] . ' - ';?>
                        </span>
                        <span class="attribute__value">
                            <?php
                            if(isset($attribute[0]['#title'])){
                                echo $attribute[0]['#title'];
                            }
                            if(isset($attribute[0]['#markup'])){
                                echo $attribute[0]['#markup'];
                            }
                            ?>
                        </span>
                        </li>
                    <?php endforeach;?>
                </ul>
            <?php endif;?>
        </div>
        <div class="comments">Отзывы <span>(<?php echo $comment_count;?>)</span></div>
    </div>
    <div class="cart__footer">
        <div class="group__cart group">
            <div class="prices">
                <?php if($content['product:field_shop_price'][0]['#markup'] !== '0 тг.'):?>
                    <div class="price__old">
                        <?php echo render($content['product:field_shop_price']);?>
                    </div>
                <?php endif;?>
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
