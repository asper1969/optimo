<?php
//kpr($node);
//
//$product = array(
//    'title' => $node->title,
//    'id' => $node->field_product['und'][0]['product_id'],
//    'catalog' => $node->field_catalog['und'],
//    'brand' => $brand_logo,
//
//);
$brand_logo_uri = $node->field_brand['und'][0]['taxonomy_term']->field_brandlogo['und'][0]['uri'];
$brand_logo = file_create_url($brand_logo_uri);
$images = $node->field_product_images['und'];
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
    $content_alter['field_product_related']);
kpr($content_alter);
?>
<div class="product__announce">
    <div class="sliders">
        <div class="slider slider__main">
            <?php foreach($images as $image):?>
                <?php
                $image_uri = $image['uri'];
                $image_alt = $image['alt'];
                $image_title = $image['title'];
                $image_url = image_style_url('product_full', $image_uri);
                $image_full_url = file_create_url($image_uri);
                ?>
                <div class="slide">
                    <a href="<?php echo $image_full_url;?>"
                       class="colorbox init-colorbox-processed cboxElement"
                       rel="gallery-node-<?php echo $node->nid;?>">
                        <img
                            src="<?php echo $image_url;?>"
                            alt="<?php echo $image_alt;?>"
                            title = <?php echo $image_title;?>>
                    </a>
                </div>
            <?php endforeach;?>
        </div>
        <div class="slider slider__extra">
            <?php foreach($images as $image):?>
                <?php
                $image_uri = $image['uri'];
                $image_alt = $image['alt'];
                $image_title = $image['title'];
                $image_url = image_style_url('product_thumbnail', $image_uri);
                ?>
                <div class="slide">
                    <img
                        src="<?php echo $image_url;?>"
                        alt="<?php echo $image_alt;?>"
                        title = <?php echo $image_title;?>>
                </div>
            <?php endforeach;?>
        </div>
        <div class="group__header group">
            <?php echo render($content['product:field_novinki']);?>
            <?php echo render($content['product:field_recomendation']);?>
            <?php echo render($content['product:field_hit']);?>
            <?php echo render($content['product:field_discount']);?>
        </div>
        <?php if($brand_logo):?>
            <div class="brand__logo">
                <img src="<?php echo $brand_logo;?>" alt="">
            </div>
        <?php endif;?>
    </div>
    <div class="info__container">
        <?php echo render($content['title_field']);?>
        <div class="info">
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
    </div>
    <div class="buy__container">
        <div class="price__old">
            <?php echo render($content['product:field_shop_price']);?>
        </div>
        <div class="price__new">
            <?php echo render($content['product:commerce_price']);?>
        </div>
        <?php echo render($content['field_product']);?>
        <div class="group__extra group">
            <div class="compare">
                <?php echo render($content['commerce_product_comparison']);?>
            </div>
            <div class="credit">
                <div class="btn">В кредит</div>
                <ul class="pop-up">
                    <li>
                        <!--kaspi credit-->
                        <a href="#">Kaspy</a>
                    </li>
                    <li><a href="#">HomeCredit</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div class="panels">
    <ul class="menu__panels">
        <li>
            <a href="#" class="panel__link <?php if(!isset($content['field_product_des'])){ echo 'is-active';}?>"
               data-panel="Отзывы">Отзывы <?php echo '(' . $comment_count . ')';?></a>
        </li>
        <?php if(isset($content['field_product_des'])):?>
            <li>
                <a href="#" class="panel__link is-active" data-panel="Описание">Описание</a>
            </li>
        <?php endif;?>
        <li class="gimmick">....</li>
    </ul>
    <div class="container">
        <div class="panels__wrapper">
            <div class="panel panel__comments <?php if(!isset($content['field_product_des'])){ echo 'is-active';}?>" data-panel="Отзывы">
                <?php print render($content['comments']);?>
            </div>
            <div class="panel panel__description  <?php if(isset($content['field_product_des'])){ echo 'is-active';}?> text" data-panel="Описание">
                <?php echo render($content['field_product_des']);?>
            </div>
        </div>
        <div class="node-product-display node-teaser">
            <div class="group__header group">
                <?php echo render($content['product:field_novinki']);?>
                <?php echo render($content['product:field_recomendation']);?>
                <?php echo render($content['product:field_hit']);?>
                <?php echo render($content['product:field_discount']);?>
            </div>
            <div class="group group__img">
                <?php
                $image = $images[0];
                $image_uri = $image['uri'];
                $image_alt = $image['alt'];
                $image_title = $image['title'];
                $image_url = image_style_url('product_announce', $image_uri);
                ?>
                <img
                    src="<?php echo $image_url;?>"
                    alt="<?php echo $image_alt;?>"
                    title = <?php echo $image_title;?>>
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
                            <li>
                                <!--kaspi credit-->
                                <a href="#">Kaspy</a>
                            </li>
                            <li><a href="#">HomeCredit</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
