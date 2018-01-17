<div class="promos">
    <div class="container">
        <?php if($page['promos_left']): ?>
            <?php print render($page['promos_left']);?>
        <?php endif; ?>
        <?php if($page['promos_right']): ?>
            <?php print render($page['promos_right']);?>
        <?php endif; ?>
    </div>
</div>
<header>
    <div class="logo">
        <img src="<?php echo $logo;?>" alt="">
    </div>
    <?php if($page['header']): ?>
        <?php print render($page['header']);?>
    <?php endif; ?>
</header>
<div class="navigation">
    <?php
    $menu = menu_tree('main-menu');
    echo render($menu);
    ?>
</div>
<div class="main-categories">

    <?php
    $menu = menu_tree_all_data('menu-catalog');
//    kpr($menu);
    //    echo render($menu);
    ?>
    <ul class="menu-catalog">
        <?php foreach($menu as $key=>$category):?>
            <li class="category">
                <a href="<?php echo $category['link']['link_path'];?>">
                    <?php echo $category['link']['title'];?>
                </a>
                <?php
                $sub_catalog = $category['below'];
                if(sizeof($sub_catalog) > 0):
                ?>
                    <ul class="sub-catalog">
                        <?php foreach($sub_catalog as $key=>$sub_category):?>
                            <li class="sub-category">
                                <a href="<?php echo $sub_category['link']['link_path'];?>">
                                    <?php echo $sub_category['link']['link_title'];?>
                                </a>
                                <?php
                                $bottom_catalog = $sub_category['below'];
                                if(sizeof($bottom_catalog) > 0):
                                    ?>
                                    <ul class="sub-catalog">
                                        <?php foreach($bottom_catalog as $key=>$bottom_category):?>
                                            <li class="sub-category">
                                                <a href="<?php echo $bottom_category['link']['link_path'];?>">
                                                    <?php echo $bottom_category['link']['link_title'];?>
                                                </a>
                                            </li>
                                        <?php endforeach;?>
                                    </ul>
                                <?php endif;?>
                            </li>
                        <?php endforeach;?>
                    </ul>
                <?php endif;?>
            </li>
        <?php endforeach;?>
    </ul>
</div>
<?php if($page['slider']): ?>
    <?php print render($page['slider']);?>
<?php endif; ?>
<?php if($page['submenu']): ?>
    <?php print render($page['submenu']);?>
<?php endif; ?>
<?php if($page['new']): ?>
    <?php print render($page['new']);?>
<?php endif; ?>
<?php if($page['subscribes']): ?>
    <?php print render($page['subscribes'])?>
<?php endif; ?>
<?php if($page['hits']): ?>
    <?php print render($page['hits']);?>
<?php endif; ?>
<?php if($page['shares']): ?>
    <?php print render($page['shares']);?>
<?php endif; ?>
<?php if($page['recommendations']): ?>
    <?php print render($page['recommendations']);?>
<?php endif; ?>
<?php if($page['useful']): ?>
    <?php print render($page['useful']);?>
<?php endif; ?>
<div class="company-info">
    <?php if($page['about_us']): ?>
        <?php print render($page['about_us']);?>
    <?php endif; ?>
    <?php if($page['map']): ?>
        <?php print render($page['map']);?>
    <?php endif; ?>
</div>
<footer>
    <div class="container">
        <?php if($page['footer_left']): ?>
            <?php print render($page['footer_left']);?>
        <?php endif; ?>
        <?php if($page['footer_center']): ?>
            <?php print render($page['footer_center']);?>
        <?php endif; ?>
        <?php if($page['footer_right']): ?>
            <?php print render($page['footer_right']);?>
        <?php endif; ?>
    </div>
    <div class="copyright">
        <div class="wrapper">
            <?php if($page['copyright']): ?>
                <?php print render($page['copyright']);?>
            <?php endif; ?>
            <div id="web-master">
                <a href="https://web-master.kz/"  target="_blank">
                    <img width="120" src="<?php print $base_path . $directory; ?>/dev/images/web-master.svg" alt="<?php print t('web-master.kz') ?>"/>
                </a>
            </div>
        </div>
    </div>
</footer>