interface Experience {
    company:               string;
    job:                   string;
    description:           string;
    staff:                 string;
    reportingTo:           string;
    startingDate:          string;
    finishingDate:         string;
    onCourse:              boolean;
    level:                 string;
    category:              string;
    subcategories:         Array<string>;
    skills:                Array<string>;
    elementType:           string,
}

interface Education {
    educationLevelCode:    string;
    courseCode:            string;
    couseName:             string;
    startingDate:          string;
    finishingDate:         string;
    stillEnrolled:         boolean;
    institutionName:       string;
    description:           string;
    hideEducation:         boolean;
    skills:                Array<string>;
    elementType:           string,
}

interface Category {
    id:     number;
    value:  string;
    order:  number;
    key:    string;
}

interface Subcategory {
    id:     number;
    value:  string;
    order:  number;
    key:    string;
    parent: number;
}

interface ProfessionalLevel {
    id:     number;
    value:  string;
    order:  number;
    key:    string;
}

interface Study {
    id:     number;
    value:  string;
    order:  number;
    key:    string;
}
