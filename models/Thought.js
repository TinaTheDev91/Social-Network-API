const { Schema, model } = require('mongoose');
const reactionSchema = require('./React');

const thoughtSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
      type: String,
      required: true,
      maxlength: 150,
      minlength: 4,
    },
    user: [
        {
            type: String,
            require: true
        }
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reactions: [
      reactionSchema
    ]
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
thoughtSchema.virtual('reactionCount').get(function(){
  return this.reactions.length
})
const Thought = model('Thought',thoughtSchema)

module.exports = Thought;
