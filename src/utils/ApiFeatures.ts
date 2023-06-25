class APIFeatures {
  query: any;
  queryString?: string | null;
  constructor(query: any, queryString?: string | null) {
    this.query = query;
    this.queryString = queryString;
  }

  limitFields() {
    if (this.queryString) {
      const fields: string = this.queryString.split(",").join(" ") + " -_id";
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select("-__v -_id");
    }

    return this;
  }
}

export default APIFeatures;
