import { test } from 'qunit';
import moduleForAcceptance from 'borrowers/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | friends/new');

test('visiting /friends/new', function(assert) {
  visit('/friends/new');

  andThen(() => {
    assert.equal(currentPath(), 'friends.new');
  });
});

test('Creating a new friend', function(assert) {
  visit('/');
  click('a[href="/friends/new"]');
  andThen(() => {
    assert.equal(currentPath(), 'friends.new');
  });
  fillIn('input[placeholder="First Name"]', 'Johnny');
  fillIn('input[placeholder="Last Name"]', 'Cash');
  fillIn('input[placeholder="Email"]', 'j@cash.com');
  fillIn('input[placeholder="Twitter"]', 'jcash');
  click('input[value="Save"]');
  andThen(() => {
    assert.equal(currentRouteName(), 'articles.index',
      'Redirects to articles.index after create'
    );
  });
});
