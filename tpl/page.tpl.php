<div class="main__content">
    <?php if($page['sidebar']): ?>
        <?php print render($page['sidebar']);?>
    <?php endif; ?>
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
        <?php if($page['content']): ?>
            <?php print render($page['content']);?>
        <?php endif; ?>
    </div>
</div>
