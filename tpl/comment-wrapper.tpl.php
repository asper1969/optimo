<?php
/**
 * @file
 * Returns the HTML for a wrapping container around comments.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728230
 */

// Render the comments and form first to see if we need headings.

unset($content['comment_form']['comment_body']['und'][0]['format']['guidelines']);
$comments = render($content['comments']);
$comment_form = render($content['comment_form']);

?>
<section id="comments" class="comments <?php print $classes; ?>"<?php print $attributes; ?>>
    <?php if($comments):?>
        <p class="block-title">Комментарии</p>
        <?php print $comments; ?>
    <?php endif;?>
    <?php if ($comment_form): ?>
        <p class="block-title">Оставить комментарий</p>
        <?php print $comment_form; ?>
    <?php endif; ?>
</section>
 