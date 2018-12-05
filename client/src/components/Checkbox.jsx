import React, { Component } from "react";
import "./Checkbox.css";

const arr = [
  "alternate_name",
  "height_meters",
  "section_name",
  "site_type",
  "country",
  "state_province",
  "site_desc",
  "coord_lat",
  "coord_long",
  "craton_terrane",
  "basin_name",
  "basin_type",
  "meta_bin",
  "earliest_date",
  "latest_date",
  "collector_first",
  "collector_last",
  "geol_ctxt_notes",
  "lithostrat_desc",
  "lithostrat_verb",
  "strat_name",
  "strat_name_long",
  "environment_bin",
  "environment_notes",
  "environment_verb",
  "is_turbiditic",
  "biostrat_verb",
  "biozone_name",
  "age_verb",
  "age_ics_name",
  "lithology_name",
  "lithology_type",
  "lithology_class",
  "lithology_text",
  "lithology_text_desc",
  "lithology_comp",
  "lithology_comp_desc",
  "lithology_notes",
  "color_name",
  "color_qualifier",
  "color_shade",
  "munsell_code",
  "fossil_verb",
  "fossil_name",
  "sedstruct_name",
  "sedstruct_desc",
  "interpreted_age",
  "interpreted_age_notes",
  "max_age",
  "min_age",
  "sample_notes",
  "project_name",
  "project_type",
  "data_source",
  "data_source_desc",
  "run_by_first",
  "run_by_last",
  "provider_first",
  "provider_last",
  "provider_lab",
  "batch_id",
  "batch_lab_id",
  "geochem_method",
  "experiment_method_code",
  "experiment_method",
  "analytical_method_code",
  "analytical_method",
  "upper_detection",
  "lower_detection",
  "fe_carb",
  "fe_ox",
  "fe_mag",
  "fe_py",
  "fe_hr",
  "fe_hr_et",
  "fe_py_hr",
  "fe_et_al",
  "toc",
  "tot_c",
  "del_13c",
  "del_34s",
  "del_238u",
  "del_98mo",
  "del_15n",
  "cn_ratio",
  "ag",
  "alu",
  "ars",
  "au",
  "ba",
  "be",
  "bi",
  "ca",
  "cd",
  "ce",
  "co",
  "cr",
  "cs",
  "cu",
  "dy",
  "er",
  "eu",
  "fe",
  "ga",
  "ge",
  "gd",
  "hf",
  "hg",
  "ho",
  "ind",
  "k",
  "loi",
  "la",
  "li",
  "lu",
  "mg",
  "mn",
  "mo",
  "n",
  "na",
  "nb",
  "nd",
  "ni",
  "p",
  "pb",
  "pr",
  "rb",
  "re",
  "su",
  "sb",
  "sc",
  "se",
  "si",
  "sm",
  "sn",
  "sr",
  "ta",
  "tb",
  "te",
  "th",
  "ti",
  "tl",
  "tm",
  "u",
  "v",
  "w",
  "y",
  "yb",
  "zn",
  "zr"
];
export default class Checkbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onChange={event => this.props.changeShow(event.target.value)}>
        {arr.map(item => (
          <label className="options">
            {item}:
            <input type="checkbox" value={item} />
          </label>
        ))}
      </div>
    );
  }
}
