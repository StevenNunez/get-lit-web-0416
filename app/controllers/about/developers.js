import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTeamMember(){
      this.toggleProperty('isCreating')
    },
    addMember(theMember){
      this.get('model').pushObject(theMember)
      this.set('newMember', "")

      this.toggleProperty('isCreating')
    }
  },
  isCreating: false



});
