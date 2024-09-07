import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { dentists } from "@/constant/data";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Filter = () => {
  return (
    <>
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="name">Search by Name</Label>
          <Input type="text" placeholder="Dr. John Doe" id="name" />
        </div>

        <Select>
          <SelectTrigger className="w-[100%]">
            <SelectValue placeholder="Search by Specialty" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Specialist</SelectLabel>
              {dentists.map((dentist) => (
                <SelectItem value={dentist.title.toLocaleLowerCase()}>
                  {dentist.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="flex flex-col gap-y-2">
          <Label htmlFor="condition">Search by Condition</Label>
          <Input type="text" placeholder="Type condition" id="condition" />
        </div>
        <h3 className="text-xl font-semibold text-black my-2">
          Refine Your Results
        </h3>

        <Select>
          <SelectTrigger className="w-[100%]">
            <SelectValue placeholder="Filter by Gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select Gender</SelectLabel>
              <SelectItem value="both">Both</SelectItem>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[100%]">
            <SelectValue placeholder="Filter by Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a Location</SelectLabel>
              {dentists.map((dentist) => (
                <SelectItem value={dentist.location.toLocaleLowerCase()}>
                  {dentist.location}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="Primary Care Physician" />
            <label
              htmlFor="Primary Care Physician"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Primary Care Physician
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="Treats Children" />
            <label
              htmlFor="Treats Children"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Treats Children
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="Researcher" />
            <label
              htmlFor="Researcher"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Researcher
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
