import type { Gender } from '../Type/type'
function GenderFemale({upGender}:Gender) {
  return (
    <>
      <input type="radio" name="gender" id="female"  value="female" onChange={(e) => upGender(e)} />
      <label htmlFor="female">Female</label>      
    </>
  )
}

export default GenderFemale
