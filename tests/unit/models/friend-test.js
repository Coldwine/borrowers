import { moduleForModel, test } from 'ember-qunit';

moduleForModel('friend', 'Unit | Model | friend', {
  // Specify the other units that are required for this test.
  needs: ['model:article']
});

test('it exists', function(assert) {
  let model = this.subject();
  // var store = this.store();
  assert.ok(model);
});

test('fullName joins first and last name', function(assert) {
  const model = this.subject({
    firstName: 'Syd',
    lastName: 'Barrett'
  });

  assert.equal(model.get('fullName'), 'Syd Barrett');

  Ember.run(() => {
    model.set('firstName', 'Geddy');
  });

  assert.equal(model.get('fullName'), 'Geddy Barrett', 'Updates fullName');
});

test('articles relationship', function(assert) {
  const klass = this.subject({}).constructor;

  const relationship = Ember.get(klass, 'relationshipsByName').get('articles');

  assert.equal(relationship.key, 'articles');
  assert.equal(relationship.kind, 'hasMany');
});
