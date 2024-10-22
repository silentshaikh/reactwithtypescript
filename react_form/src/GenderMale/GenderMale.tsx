import type { Gender } from '../Type/type'
function GenderMale({gender,upGender}:Gender) {
  return (
    <>
      <input type="radio" name="gender" id="male" value="male" onChange={(e) => upGender(e)} />
      <label htmlFor="male">Male</label>
    </>
  )
}

export default GenderMale
