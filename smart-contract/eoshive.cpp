#include "eoshive.hpp"

#include <eosiolib/transaction.hpp>
#include "eosio.token/eosio.token.hpp"
#include "helpers.hpp"

using namespace eosio;
using namespace std;

void eoshive::createProject(
    const std::string project_name,
    const name manager,
    const double operation_percentage,
    const name account0,
    const double account0_percentage,
    const name account1,
    const double account1_percentage,
    const name account2,
    const double account2_percentage,
    const name account3,
    const double account3_percentage,
    const name account4,
    const double account4_percentage,
    const name account5,
    const double account5_percentage,
    const name account6,
    const double account6_percentage,
    const name account7,
    const double account7_percentage,
    const name account8,
    const double account8_percentage,
    const name account9,
    const double account9_percentage)
{
    // do stuff
    project_index projects(_self, _self.value);

    projects.emplace(_self, [&](auto &project) {
        job.project_name = project_name;
        job.manager = manager;
        job.operation_percentage = operation_percentage;
        job.account0 = account0;
        job.account0_percentage = account0_percentage;
        job.account1 = account1;
        job.account1_percentage = account1_percentage;
        job.account2 = account2;
        job.account2_percentage = account2_percentage;
        job.account3 = account3;
        job.account3_percentage = account3_percentage;
        job.account4 = account4;
        job.account4_percentage = account4_percentage;
        job.account5 = account5;
        job.account5_percentage = account5_percentage;
        job.account6 = account6;
        job.account6_percentage = account6_percentage;
        job.account7 = account7;
        job.account7_percentage = account7_percentage;
        job.account8 = account8;
        job.account8_percentage = account8_percentage;
        job.account9 = account9;
        job.account9_percentage = account9_percentage;
    });
}

void eoshive::editProject(
    const std::string project_id_string,
    const std::string project_name,
    const double operation_percentage,
    const double account0_percentage,
    const double account1_percentage,
    const double account2_percentage,
    const double account3_percentage,
    const double account4_percentage,
    const double account5_percentage,
    const double account6_percentage,
    const double account7_percentage,
    const double account8_percentage,
    const double account9_percentage)
{
    uint64_t uintProjectId = string_to_name(project_id_string.c_str());
    project_index projects(_self, _self.value);

    auto project = projects.get(uintProjectId);

    require_auth(project.manager);

    projects.modify(projects.find(uintProjectId), _self, [&](auto &project) {
        project.account0_percentage = account0_percetage;
        project.account1_percentage = account1_percetage;
        project.account2_percentage = account2_percetage;
        project.account3_percentage = account4_percetage;
        project.account4_percentage = account4_percetage;
        project.account5_percentage = account5_percetage;
        project.account6_percentage = account6_percetage;
        project.account7_percentage = account7_percetage;
        project.account8_percentage = account8_percetage;
        project.account9_percentage = account9_percetage;
        project.operation_percentage = operation_percentage;
    });
}

void eoshive::addAccount(
    const std::string project_id_string,
    const name account,
    const double account_percentage)
{
    uint64_t uintProjectId = string_to_name(project_id_string.c_str());
    project_index projects(_self, _self.value);

    auto project = projects.get(uintProjectId);

    require_auth(project.manager);

    projects.modify(projects.find(uintProjectId), _self, [&](auto &project) {
        project.account = account;
    });
}

void eoshive::addFunding(
    const std::string project_id_string,
    const asset funding)
{
    // do stuff
}

void eoshive::completeProject(
    const std::string project_id_string)
{
    uint64_t uintProjectId = string_to_name(project_id_string.c_str());
    project_index projects(_self, _self.value);

    auto project = projects.get(uintProjectId);

    require_auth(project.manager);

    projects.modify(projects.find(uintProjectId), _self, [&](auto &project) {
        project.completed = true;
        project.completed_at = current_time();
    });

    if (project->account0) {
        action(
            permission_level{_self, "active"_n},
            "eosio.token"_n, "transfer"_n,
            make_tuple(_self, project->account0, ((project->funding - project->operation_amount) * project->account0_percentage),
                       std::string("Distribution complete")))
            .send();
    }

    if (project->account1)
    {
        action(
            permission_level{_self, "active"_n},
            "eosio.token"_n, "transfer"_n,
            make_tuple(_self, project->account1, ((project->funding - project->operation_amount) * project->account1_percentage),
                       std::string("Distribution complete")))
            .send();
    }

    if (project->account2)
    {
        action(
            permission_level{_self, "active"_n},
            "eosio.token"_n, "transfer"_n,
            make_tuple(_self, project->account2, ((project->funding - project->operation_amount) * project->account2_percentage),
                       std::string("Distribution complete")))
            .send();
    }

    if (project->account3)
    {
        action(
            permission_level{_self, "active"_n},
            "eosio.token"_n, "transfer"_n,
            make_tuple(_self, project->account3, ((project->funding - project->operation_amount) * project->account3_percentage),
                       std::string("Distribution complete")))
            .send();
    }

    if (project->account4)
    {
        action(
            permission_level{_self, "active"_n},
            "eosio.token"_n, "transfer"_n,
            make_tuple(_self, project->account4, ((project->funding - project->operation_amount) * project->account4_percentage),
                       std::string("Distribution complete")))
            .send();
    }

    if (project->account5)
    {
        action(
            permission_level{_self, "active"_n},
            "eosio.token"_n, "transfer"_n,
            make_tuple(_self, project->account5, ((project->funding - project->operation_amount) * project->account5_percentage),
                       std::string("Distribution complete")))
            .send();
    }

    if (project->account6)
    {
        action(
            permission_level{_self, "active"_n},
            "eosio.token"_n, "transfer"_n,
            make_tuple(_self, project->account6, ((project->funding - project->operation_amount) * project->account6_percentage),
                       std::string("Distribution complete")))
            .send();
    }

    if (project->account7)
    {
        action(
            permission_level{_self, "active"_n},
            "eosio.token"_n, "transfer"_n,
            make_tuple(_self, project->account7, ((project->funding - project->operation_amount) * project->account7_percentage),
                       std::string("Distribution complete")))
            .send();
    }

    if (project->account8)
    {
        action(
            permission_level{_self, "active"_n},
            "eosio.token"_n, "transfer"_n,
            make_tuple(_self, project->account8, ((project->funding - project->operation_amount) * project->account8_percentage),
                       std::string("Distribution complete")))
            .send();
    }

    if (project->account9)
    {
        action(
            permission_level{_self, "active"_n},
            "eosio.token"_n, "transfer"_n,
            make_tuple(_self, project->account9, ((project->funding - project->operation_amount) * project->account9_percentage),
                       std::string("Distribution complete")))
            .send();
    }
}



// extern "C" {
//     void apply(uint64_t receiver, uint64_t code, uint64_t action) {
//         if (code == receiver || (action == "transfer"_n.value && code != receiver)) {
//             switch (action)
//             {
//                 EOSIO_DISPATCH_HELPER(eoshive, (clearall)(notify)(transfer)(createjob)(checkjob)(canceljob)(initjob)(reviewjob)(acceptjob)(completejob)(erase))
//             }
//         }
//     }
// }
