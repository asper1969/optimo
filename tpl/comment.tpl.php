<?php
/**
 * @file
 * Returns the HTML for comments.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728216
 */

?>
<article class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

    <div class="comment__header">
        <div class="author"><?php print $author;?></div>
        <div class="date"><?php print format_date($comment->created, 'custom', 'd.m.Y');?></div>
    </div>

    <?php
    // We hide the comments and links now so that we can render them later.
    hide($content['links']);
    print render($content);
    ?>

    <?php if ($signature): ?>
        <div class="user-signature clearfix">
            <?php print $signature; ?>
        </div>
    <?php endif; ?>

    <?php
    global $user;
    if ($user->uid != 0) {
        print render($content['links']);
    }
    ?>
</article>
