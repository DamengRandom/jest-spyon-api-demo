import * as fetch from "node-fetch";
import { fetchDataWrapper } from "./App";

describe("Test APP", () => {
  it('test fetchDataWrapper', async (done) => {
    const spy = jest.spyOn(fetch, 'default');
    spy.mockImplementation(
      () => (
        new fetch.Response(
        JSON.stringify({data: 1}),
          {
            status: 200,
          }
        ))
    );
    try{
      const result = await fetchDataWrapper(jest.fn());
      if(result){
        console.log(result);
        expect(result.data).toEqual(1);
      }else {
        done.fail('Expected to throw an Exception');
      }
    }catch(e) {
      console.log("Error is: ", e);
    }
    done();
  }, 1000);
});
