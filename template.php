<?php

/**
 * Override or insert variables into the maintenance page template.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 */
function webmaster_preprocess_maintenance_page(&$vars) {
  // When a variable is manipulated or added in preprocess_html or
  // preprocess_page, that same work is probably needed for the maintenance page
  // as well, so we can just re-use those functions to do that work here.
  // webmaster_preprocess_html($vars);
  // webmaster_preprocess_page($vars);

  // This preprocessor will also be used if the db is inactive. To ensure your
  // theme is used, add the following line to your settings.php file:
  // $conf['maintenance_theme'] = 'webmaster';
  // Also, check $vars['db_is_active'] before doing any db queries.
}

/**
 * Implements hook_modernizr_load_alter().
 *
 * @return
 *   An array to be output as yepnope testObjects.
 */
/* -- Delete this line if you want to use this function
function webmaster_modernizr_load_alter(&$load) {

}

/**
 * Implements hook_preprocess_html()
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 */
/* -- Delete this line if you want to use this function
function webmaster_preprocess_html(&$vars) {

}

/**
 * Override or insert variables into the page template.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 */
/* -- Delete this line if you want to use this function
function webmaster_preprocess_page(&$vars) {

}

/**
 * Override or insert variables into the region templates.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 */
/* -- Delete this line if you want to use this function
function webmaster_preprocess_region(&$vars) {

}
// */

/**
 * Override or insert variables into the block templates.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 */
/* -- Delete this line if you want to use this function
function webmaster_preprocess_block(&$vars) {

}
// */

/**
 * Override or insert variables into the entity template.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 */
/* -- Delete this line if you want to use this function
function webmaster_preprocess_entity(&$vars) {

}
// */

/**
 * Override or insert variables into the node template.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 */
/* -- Delete this line if you want to use this function
function webmaster_preprocess_node(&$vars) {
  $node = $vars['node'];
}
// */

/**
 * Override or insert variables into the field template.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("field" in this case.)
 */
/* -- Delete this line if you want to use this function
function webmaster_preprocess_field(&$vars, $hook) {

}
// */

/**
 * Override or insert variables into the comment template.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 */
/* -- Delete this line if you want to use this function
function webmaster_preprocess_comment(&$vars) {
  $comment = $vars['comment'];
}
// */

/**
 * Override or insert variables into the views template.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 */
/* -- Delete this line if you want to use this function
function webmaster_preprocess_views_view(&$vars) {
  $view = $vars['view'];
}
// */


/**
 * Override or insert css on the site.
 *
 * @param $css
 *   An array of all CSS items being requested on the page.
 */
/* -- Delete this line if you want to use this function
function webmaster_css_alter(&$css) {

}
// */

/**
 * Override or insert javascript on the site.
 *
 * @param $js
 *   An array of all JavaScript being presented on the page.
 */
/* -- Delete this line if you want to use this function
function webmaster_js_alter(&$js) {

}
// */

function webmaster_preprocess_page(&$vars, $hook) {
  $header = drupal_get_http_header("status");

  if (isset($vars['node'])) {

    // If the node type is "blog_madness" the template suggestion will be "page--blog-madness.tpl.php".
    $vars['theme_hook_suggestions'][] = 'page__'. $vars['node']->type;
  }
}

function webmaster_preprocess_node(&$vars) {
  if($vars['view_mode'] == 'teaser') {
    $vars['theme_hook_suggestions'][] = 'node__' . $vars['node']->type . '__teaser';
    $vars['theme_hook_suggestions'][] = 'node__' . $vars['node']->nid . '__teaser';
  }
}

function webmaster_form_comment_form_alter(&$form, &$form_state, $form_id) {

//  $form['#action'] = '?' . drupal_get_destination();
  $form['author']['name']['#attributes']['placeholder'] = t('Ваше имя*');
  $form['field_e_mail']['und'][0]['email']['#attributes']['placeholder'] = t('Ваш e-mail');
  $form['comment_body']['und'][0]['value']['#attributes']['placeholder'] = t('Ваш Комментарий');
  $form['actions']['submit']['#value'] = t('Отправить');
  $form['captcha']['#attributes']['placeholder'] = t('Введите символы, которые показаны на картинке.');

  unset($form['author']['name']['#title']);
  unset($form['field_e_mail']['und'][0]['email']['#title']);
  unset($form['comment_body']['und'][0]['value']['#title']);
}

function webmaster_form_alter(&$form, &$form_state, $form_id){

  if($form_id == 'user_login'){

    unset($form['name']['#title']);
    unset($form['pass']['#title']);
    $form['name']['#attributes']['placeholder'] = t('Имя пользователя');
    $form['pass']['#attributes']['placeholder'] = t('Имя пользователя');
  }

  if($form_id == 'user_pass'){
//    kpr($form);
    $form['name']['#attributes']['placeholder'] = t('Имя пользователя или адрес электронной почты');
  }

  if($form_id == 'user_register_form'){
//    kpr($form);

    $form['account']['name']['#attributes']['placeholder'] = t('Имя пользователя');
    $form['account']['mail']['#attributes']['placeholder'] = t('E-mail адрес');
    $form['account']['pass']['#attributes']['placeholder'] = t('Пароль');
  }

  if($form_id == 'commerce_checkout_form_shipping'){
//    kpr($form);

    $form['customer_profile_shipping']['field_customer_name']['und'][0]['value']['#attributes']['placeholder'] = t('Ваше Имя*');
    $form['customer_profile_shipping']['field_customer_adress']['und'][0]['value']['#attributes']['placeholder'] = t('Домашний адрес*');
    $form['customer_profile_shipping']['field_customer_phone']['und'][0]['value']['#attributes']['placeholder'] = t('Мобильный*');
    $form['customer_profile_shipping']['field_customer_phone_city']['und'][0]['value']['#attributes']['placeholder'] = t('Городской телефон');
    $form['customer_profile_shipping']['field_customer_email']['und'][0]['email']['#attributes']['placeholder'] = t('Ваш e-mail');
    $form['customer_profile_shipping']['field_customer_order_c']['und'][0]['value']['#attributes']['placeholder'] = t('Комментарий к заказу');
  }
}