<?php
global $user;
$current_node = '';
if ( arg(0) == 'node' && is_numeric(arg(1)) ) {
    $node = node_load(arg(1));
    $current_node = $node->type;
}
//kpr($current_node);
?>
<div class="overlay"></div>
<div class="promos">
    <div class="container">
        <?php if($page['promos_left']): ?>
            <?php print render($page['promos_left']);?>
        <?php endif; ?>
        <?php if($page['promos_right'] && !$user->uid): ?>
            <?php print render($page['promos_right']);?>
        <?php endif; ?>
    </div>
</div>
<header>
    <div class="logo">
        <a href="/">
            <img src="<?php echo $logo;?>" alt="">
        </a>
    </div>
    <?php if($page['header']): ?>
        <?php print render($page['header']);?>
    <?php endif; ?>
</header>
<div class="navigation">
    <div class="btns">
        <div class="btn btn__menu">
            <div class="icon">
                <div class="line">.</div>
                <div class="line">.</div>
                <div class="line">.</div>
            </div>
            <span>Меню</span>
        </div>
        <div class="btn btn__catalog">
            <div class="icon">
                <div class="line">.</div>
                <div class="line">.</div>
                <div class="line">.</div>
                <div class="line">.</div>
            </div>
            <span>Каталог</span>
        </div>
    </div>
    <div class="container">
        <?php
        $menu = menu_tree('main-menu');
        echo render($menu);
        ?>
        <div class="close">+</div>
    </div>
</div>
<div class="main-categories">

    <?php
    $menu = menu_tree_all_data('menu-catalog');
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
    <div class="close">+</div>
</div>
<?php print $breadcrumb;?>
<div class="main__content">
    <div class="sidebar">
        <div class="submenu submenu__left">
            <?php
            $menu_links = menu_load_links('main-menu');
            $current_path = current_path();
            ?>
            <p class="block-title">Компания</p>
            <ul class="menu">
                <?php foreach($menu_links as $link):?>
                    <?php if(isset($link['options']['attributes']['name'])):?>
                        <?php
                        if($current_node == ''){
                            $current_node = '_____';
                        }
                        if($link['options']['attributes']['name'] == 'Компания'):?>
                            <li>
                                <a href="<?php echo '/' . $link['link_path'];?>"
                                   class="menu_link <?php if($current_path == $link['link_path']
                                       || $link['link_path'] == $current_node
                                       || strpos($link['link_path'], $current_node) !== false){
                                       echo 'active';
                                   }?>">
                                    <?php echo $link['link_title'];?>
                                </a>
                            </li>
                        <?php endif;?>
                    <?php endif;?>
                <?php endforeach;?>
            </ul>
        </div>
        <div class="submenu submenu__right">
            <p class="block-title">Покупателям</p>
            <ul class="menu">
                <?php foreach($menu_links as $link):?>
                    <?php if(isset($link['options']['attributes']['name'])):?>
                        <?php if($link['options']['attributes']['name'] == 'Покупателям'):?>
                            <li>
                                <a href="<?php echo '/' . $link['link_path'];?>"
                                   class="menu_link <?php if($current_path == $link['link_path']
                                       || $link['link_path'] == $current_node
                                       || strpos($link['link_path'], $current_node) !== false){
                                    echo 'active';
                                }?>">
                                    <?php echo $link['link_title'];?>
                                </a>
                            </li>
                        <?php endif;?>
                    <?php endif;?>
                <?php endforeach;?>
            </ul>
        </div>
        <?php if($page['sidebar']): ?>
            <?php print render($page['sidebar']);?>
        <?php endif; ?>
    </div>
    <div class="container">
        <?php if($title): ?>
            <h1 class="title" id="page-title"><?php print trim($title); ?></h1>
        <?php endif;?>
        <?php if ($tabs): ?>
            <div class="tabs">
                <?php print render($tabs); ?>
            </div>
        <?php endif; ?>
        <?php if ($action_links): ?>
            <ul class="action-links">
                <?php print render($action_links); ?>
            </ul>
        <?php endif; ?>
        <?php print $messages; ?>
        <?php if($page['content']): ?>
            <?php print render($page['content']);?>
        <?php endif; ?>
    </div>
</div>

<footer>
    <div class="container">
        <div class="footer__left">
            <?php
            $menu_links = menu_load_links('main-menu');
            //            kpr($menu_links);
            ?>
            <div class="submenu submenu__left">
                <p class="block-title">Клиентам</p>
                <ul class="menu">
                    <?php foreach($menu_links as $link):?>
                        <?php if(isset($link['options']['attributes']['name'])):?>
                            <?php if($link['options']['attributes']['name'] == 'Компания'):?>
                                <li>
                                    <a href="<?php echo '/' . $link['link_path'];?>"
                                       class="menu_link <?php if($current_path == $link['link_path']){
                                           echo 'active';
                                       }?>">
                                        <?php echo $link['link_title'];?>
                                    </a>
                                </li>
                            <?php endif;?>
                        <?php endif;?>
                    <?php endforeach;?>
                </ul>
            </div>
            <div class="submenu submenu__right">
                <p class="block-title">Покупателям</p>
                <ul class="menu">
                    <?php foreach($menu_links as $link):?>
                        <?php if(isset($link['options']['attributes']['name'])):?>
                            <?php if($link['options']['attributes']['name'] == 'Покупателям'):?>
                                <li>
                                    <a href="<?php echo '/' . $link['link_path'];?>"
                                       class="menu_link <?php if($current_path == $link['link_path']){
                                           echo 'active';
                                       }?>">
                                        <?php echo $link['link_title'];?>
                                    </a>
                                </li>
                            <?php endif;?>
                        <?php endif;?>
                    <?php endforeach;?>
                </ul>
            </div>
        </div>
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
                    <img width="120" src="<?php print $base_path . $directory; ?>/prod/img/web-master.svg" alt="<?php print t('web-master.kz') ?>"/>
                </a>
            </div>
        </div>
    </div>
</footer>

<div class="hidden__container">
    <?php print $messages; ?>
    <?php if($page['hidden__region']): ?>
        <?php print render($page['hidden__region']);?>
    <?php endif; ?>
</div>