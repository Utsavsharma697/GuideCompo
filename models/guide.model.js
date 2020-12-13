module.exports = mongoose => {
    
      var schema = mongoose.Schema(
        {
          name: String,
          mail: String,
          password: Number,
          number: Number,
          age: Number,
          location: String,
          price: Number

        },
        { timestamps: true }
      );

      schema.method("toJSON", function() {
          const {__v, _id, ...object} = this.toObject();
          object.id = _id;
          return object;


      });

      const Guide = mongoose.model(
        "GuideInfo",schema);
    
  
    return Guide;
  };