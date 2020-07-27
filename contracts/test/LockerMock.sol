// SPDX-License-Identifier: AGPL-3.0-only

/*
    LockerMock.sol - SKALE SAFT CORE
    Copyright (C) 2018-Present SKALE Labs
    @author Dmytro Stebaiev

    SKALE SAFT CORE is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    SKALE SAFT CORE is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with SKALE SAFT CORE.  If not, see <https://www.gnu.org/licenses/>.
*/

pragma solidity 0.6.10;

import "../interfaces/delegation/ILocker.sol";

contract LockerMock is ILocker {
    function getAndUpdateLockedAmount(address) external override returns (uint) {
        return 13;
    }
    
    function getAndUpdateForbiddenForDelegationAmount(address) external override returns (uint) {
        return 13;
    }
}