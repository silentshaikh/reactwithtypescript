
import GenderMale from '../GenderMale/GenderMale'
import GenderFemale from '../GenderFemale/GenderFemale'
import type { Gender } from '../Type/type'
import Error from '../Error/Error';
function Gender({gender,upGender,error}:Gender) {
  return (
    <>
        <label>Gender</label>
      <div className="gender">
      <GenderMale gender={gender} upGender={upGender} error={error}/>
      <GenderFemale gender={gender} upGender={upGender} error={error}/>
      </div>
      {error && <Error error='Please Select Your Gender'/>}
    </>
  )
}

export default Gender
